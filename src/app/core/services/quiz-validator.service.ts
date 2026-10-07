import { Injectable } from '@angular/core';
import { QUESTION_TYPES, QuestionType } from '../models/quiz.models';

// ---------- Raw (unvalidated) shapes ----------

type RawQuiz = Partial<Record<'id' | 'title' | 'subject' | 'questions', unknown>>;
type RawQuestion = Partial<Record<'id' | 'question' | 'type' | 'correctAnswers' | 'options', unknown>>;
type RawOption = Partial<Record<'id' | 'text', unknown>>;

// ---------- Small helpers ----------

/** Returns the value typed as T if it is a non-null object, otherwise null. */
const asObject = <T>(value: unknown): T | null =>
  typeof value === 'object' && value !== null ? (value as T) : null;

const isNonEmptyString = (value: unknown): value is string =>
  typeof value === 'string' && value.trim().length > 0;

const isQuestionType = (value: unknown): value is QuestionType =>
  QUESTION_TYPES.some((type) => type === value);

// ---------- Constants ----------

const REQUIRED_QUIZ_FIELDS = ['id', 'title', 'subject'] as const;

/** true_false questions may omit options; the parser adds these defaults. */
const DEFAULT_TRUE_FALSE_OPTIONS = [
  { id: 'true', text: 'True' },
  { id: 'false', text: 'False' }
];

/** Per-type rules: add a new question type by adding one entry. */
const TYPE_RULES: Record<
  QuestionType,
  { isValidCount: (correctCount: number) => boolean; message: string }
> = {
  single_choice: {
    isValidCount: (count) => count === 1,
    message: 'single_choice needs exactly one correct answer.'
  },
  multiple_choice: {
    isValidCount: (count) => count >= 1,
    message: 'multiple_choice needs at least one correct answer.'
  },
  true_false: {
    isValidCount: (count) => count === 1,
    message: 'true_false needs exactly one correct answer.'
  }
};

// ---------- Service ----------

@Injectable({ providedIn: 'root' })
export class QuizValidatorService {
  /** Returns a list of human-readable errors; an empty list means the quiz is valid. */
  validate(quizData: unknown): string[] {
    const quiz = asObject<RawQuiz>(quizData);
    if (!quiz) return ['Quiz must be a JSON object.'];

    const errors = REQUIRED_QUIZ_FIELDS
      .filter((field) => !isNonEmptyString(quiz[field]))
      .map((field) => `Quiz: "${field}" is required.`);

    const { questions } = quiz;
    if (!Array.isArray(questions) || questions.length === 0) {
      return [...errors, 'Quiz: "questions" must be a non-empty array.'];
    }

    const seenQuestionIds = new Set<string>();
    questions.forEach((question: unknown, index: number) => {
      errors.push(...this.validateQuestion(question, `Question ${index + 1}`, seenQuestionIds));
    });

    return errors;
  }

  private validateQuestion(value: unknown, label: string, seenIds: Set<string>): string[] {
    const question = asObject<RawQuestion>(value);
    if (!question) return [`${label}: must be an object.`];

    const errors: string[] = [];

    // id
    const { id } = question;
    if (!isNonEmptyString(id)) {
      errors.push(`${label}: "id" is required.`);
    } else if (seenIds.has(id)) {
      errors.push(`${label}: duplicate id "${id}".`);
    } else {
      seenIds.add(id);
    }

    // text
    if (!isNonEmptyString(question.question)) {
      errors.push(`${label}: "question" text is required.`);
    }

    // type
    const { type } = question;
    if (!isQuestionType(type)) {
      errors.push(`${label}: unknown type "${type}".`);
      return errors;
    }

    // correctAnswers
    const { correctAnswers } = question;
    if (!Array.isArray(correctAnswers)) {
      errors.push(`${label}: "correctAnswers" must be an array.`);
      return errors;
    }

    // options
    const options = question.options ?? (type === 'true_false' ? DEFAULT_TRUE_FALSE_OPTIONS : []);
    if (!Array.isArray(options) || options.length < 2) {
      errors.push(`${label}: needs at least 2 options.`);
      return errors;
    }
    const { optionIds, errors: optionErrors } = this.validateOptions(options, label);
    errors.push(...optionErrors);

    // correct answers must point at existing options
    const unknownAnswers = correctAnswers.filter(
      (answer: unknown) => typeof answer !== 'string' || !optionIds.has(answer)
    );
    if (unknownAnswers.length) {
      errors.push(`${label}: correctAnswers reference unknown option(s): ${unknownAnswers.join(', ')}.`);
    }

    // type-specific rule
    const rule = TYPE_RULES[type];
    if (!rule.isValidCount(correctAnswers.length)) {
      errors.push(`${label}: ${rule.message}`);
    }

    return errors;
  }

  private validateOptions(
    options: unknown[],
    questionLabel: string
  ): { optionIds: Set<string>; errors: string[] } {
    const optionIds = new Set<string>();
    const errors: string[] = [];

    options.forEach((value: unknown, index: number) => {
      const option = asObject<RawOption>(value);
      const { id, text } = option ?? {};

      if (!isNonEmptyString(id) || !isNonEmptyString(text)) {
        errors.push(`${questionLabel}, option ${index + 1}: "id" and "text" are required.`);
      } else if (optionIds.has(id)) {
        errors.push(`${questionLabel}: duplicate option id "${id}".`);
      } else {
        optionIds.add(id);
      }
    });

    return { optionIds, errors };
  }
}