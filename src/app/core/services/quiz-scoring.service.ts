import { Injectable } from '@angular/core';
import {
  OptionState,
  QuestionStatus,
  QuizOption,
  QuizQuestion,
  QuizSession
} from '../models/quiz.models';

@Injectable({ providedIn: 'root' })
export class QuizScoringService {
  status(question: QuizQuestion, selectedOptionIds: string[] = []): QuestionStatus {
    if (!selectedOptionIds.length) return 'unanswered';
    const isCorrect =
      selectedOptionIds.length === question.correctAnswers.length &&
      question.correctAnswers.every((correctAnswerId) =>
        selectedOptionIds.includes(correctAnswerId)
      );
    return isCorrect ? 'correct' : 'incorrect';
  }

  optionState(
    question: QuizQuestion,
    selectedOptionIds: string[],
    option: QuizOption
  ): OptionState {
    const isSelected = selectedOptionIds.includes(option.id);
    const isCorrectAnswer = question.correctAnswers.includes(option.id);
    if (isSelected) return isCorrectAnswer ? 'correct' : 'incorrect';
    if (isCorrectAnswer) return 'missed';
    return 'neutral';
  }

  summarize(session: QuizSession) {
    const questionStatuses = session.quiz.questions.map((question) =>
      this.status(question, session.answers[question.id])
    );
    const questionCount = questionStatuses.length;
    const correctCount = questionStatuses.filter((status) => status === 'correct').length;
    return {
      questionCount,
      correctCount,
      incorrectCount: questionStatuses.filter((status) => status === 'incorrect').length,
      unansweredCount: questionStatuses.filter((status) => status === 'unanswered').length,
      scorePercentage: questionCount ? Math.round((correctCount / questionCount) * 100) : 0
    };
  }
}
