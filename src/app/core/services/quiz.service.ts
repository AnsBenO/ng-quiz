import { Injectable, signal } from '@angular/core';
import { SERVICENOW_CSA_QUIZ } from '../data/servicenow-csa-quiz';
import { Quiz } from '../models/quiz.models';

/** Holds available quiz definitions. Swap internals for persistence/HTTP later. */
@Injectable({ providedIn: 'root' })
export class QuizService {
  private readonly quizzesSignal = signal<Quiz[]>([SERVICENOW_CSA_QUIZ]);
  readonly quizzes = this.quizzesSignal.asReadonly();

  add(quiz: Quiz) {
    this.quizzesSignal.update((availableQuizzes) => [
      ...availableQuizzes.filter((existingQuiz) => existingQuiz.id !== quiz.id),
      quiz
    ]);
  }

  remove(quizId: string) {
    this.quizzesSignal.update((availableQuizzes) =>
      availableQuizzes.filter((quiz) => quiz.id !== quizId)
    );
  }
}
