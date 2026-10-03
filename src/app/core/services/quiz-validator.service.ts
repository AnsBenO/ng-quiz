import { Injectable } from '@angular/core';
import { QUESTION_TYPES, QuestionType } from '../models/quiz.models';

type ValidationRecord = Record<string, any>;
const isNonEmptyString = (value: unknown): value is string =>
  typeof value === 'string' && value.trim().length > 0;

/** Per-type rules: add a new question type by adding one entry. */
const TYPE_RULES: Record<
  QuestionType,
  (questionRecord: ValidationRecord, questionLabel: string) => string[]
> = {
  single_choice: (questionRecord, questionLabel) =>
    questionRecord['correctAnswers']?.length === 1
      ? []
      : [`${questionLabel}: single_choice needs exactly one correct answer.`],
  multiple_choice: (questionRecord, questionLabel) =>
    questionRecord['correctAnswers']?.length >= 1
      ? []
      : [`${questionLabel}: multiple_choice needs at least one correct answer.`],
  true_false: (questionRecord, questionLabel) =>
    questionRecord['correctAnswers']?.length === 1
      ? []
      : [`${questionLabel}: true_false needs exactly one correct answer.`]
};

@Injectable({ providedIn: 'root' })
export class QuizValidatorService {
  validate(quizDataInput: unknown): string[] {
    const validationErrors: string[] = [];
    if (!quizDataInput || typeof quizDataInput !== 'object') return ['Quiz must be a JSON object.'];
    const quizRecord = quizDataInput as ValidationRecord;
    for (const fieldName of ['id', 'title', 'subject'])
      if (!isNonEmptyString(quizRecord[fieldName]))
        validationErrors.push(`Quiz: "${fieldName}" is required.`);
    if (!Array.isArray(quizRecord['questions']) || quizRecord['questions'].length === 0) {
      validationErrors.push('Quiz: "questions" must be a non-empty array.');
      return validationErrors;
    }
    const questionIds = new Set<string>();
    quizRecord['questions'].forEach((questionRecord: ValidationRecord, questionIndex: number) => {
      const questionLabel = `Question ${questionIndex + 1}`;
      if (!questionRecord || typeof questionRecord !== 'object') {
        validationErrors.push(`${questionLabel}: must be an object.`);
        return;
      }
      if (!isNonEmptyString(questionRecord['id'])) {
        validationErrors.push(`${questionLabel}: "id" is required.`);
      } else if (questionIds.has(questionRecord['id'])) {
        validationErrors.push(`${questionLabel}: duplicate id "${questionRecord['id']}".`);
      } else {
        questionIds.add(questionRecord['id']);
      }
      if (!isNonEmptyString(questionRecord['question']))
        validationErrors.push(`${questionLabel}: "question" text is required.`);
      if (!QUESTION_TYPES.includes(questionRecord['type'])) {
        validationErrors.push(`${questionLabel}: unknown type "${questionRecord['type']}".`);
        return;
      }
      if (!Array.isArray(questionRecord['correctAnswers'])) {
        validationErrors.push(`${questionLabel}: "correctAnswers" must be an array.`);
        return;
      }
      // true_false may omit options(defaults are added by the parser)
      const options: ValidationRecord[] =
        questionRecord['options'] ??
        (questionRecord['type'] === 'true_false'
          ? [
            { id: 'true', text: 'True' },
            { id: 'false', text: 'False' }
          ]
          : []);
      if (!Array.isArray(options) || options.length < 2) {
        validationErrors.push(`${questionLabel}: needs at least 2 options.`);
        return;
      }
      const optionIds = new Set<string>();
      options.forEach((optionRecord, optionIndex) => {
        if (
          !optionRecord ||
          !isNonEmptyString(optionRecord['id']) ||
          !isNonEmptyString(optionRecord['text'])
        ) {
          validationErrors.push(
            `${questionLabel}, option ${optionIndex + 1}: "id" and "text" are required.`
          );
        } else if (optionIds.has(optionRecord['id'])) {
          validationErrors.push(`${questionLabel}: duplicate option id "${optionRecord['id']}".`);
        } else {
          optionIds.add(optionRecord['id']);
        }
      });
      const invalidCorrectAnswerIds = questionRecord['correctAnswers'].filter(
        (answerId: string) => !optionIds.has(answerId)
      );
      if (invalidCorrectAnswerIds.length)
        validationErrors.push(
          `${questionLabel}: correctAnswers reference unknown option(s): ${invalidCorrectAnswerIds.join(', ')}.`
        );
      validationErrors.push(
        ...TYPE_RULES[questionRecord['type'] as QuestionType](questionRecord, questionLabel)
      );
    });
    return validationErrors;
  }
}
