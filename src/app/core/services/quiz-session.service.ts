import { Injectable, computed, signal } from '@angular/core';
import { DEFAULT_SETTINGS, Quiz, QuizSession, QuizSettings } from '../models/quiz.models';

const shuffle = <Item>(items: Item[]): Item[] => {
  const shuffledItems = [...items];
  for (let itemIndex = shuffledItems.length - 1; itemIndex > 0; itemIndex--) {
    const swapIndex = Math.floor(Math.random() * (itemIndex + 1));
    [shuffledItems[itemIndex], shuffledItems[swapIndex]] = [
      shuffledItems[swapIndex],
      shuffledItems[itemIndex]
    ];
  }
  return shuffledItems;
};

@Injectable({ providedIn: 'root' })
export class QuizSessionService {
  readonly settings = signal<QuizSettings>({ ...DEFAULT_SETTINGS });
  readonly session = signal<QuizSession | null>(null);
  readonly questionIndex = signal(0);

  readonly currentQuestion = computed(
    () => this.session()?.quiz.questions[this.questionIndex()] ?? null
  );
  readonly questionCount = computed(() => this.session()?.quiz.questions.length ?? 0);
  readonly progressPercentage = computed(() =>
    this.questionCount() ? ((this.questionIndex() + 1) / this.questionCount()) * 100 : 0
  );

  readonly isCurrentQuestionChecked = computed(() => {
    const question = this.currentQuestion();
    return !!question && !!this.session()?.checked[question.id];
  });

  readonly selectedOptionIds = computed(() => {
    const question = this.currentQuestion();
    return (question && this.session()?.answers[question.id]) || [];
  });

  start(quiz: Quiz) {
    const currentSettings = this.settings();
    const workingQuiz: Quiz = structuredClone(quiz); // never mutate the original
    if (currentSettings.shuffleQuestions) workingQuiz.questions = shuffle(workingQuiz.questions);
    // Options keep their ids, so correctness is preserved.
    if (currentSettings.shuffleAnswers)
      workingQuiz.questions.forEach((question) => {
        if (question.type !== 'true_false') question.options = shuffle(question.options);
      });
    this.session.set({
      quiz: workingQuiz,
      settings: { ...currentSettings },
      answers: {},
      checked: {},
      submitted: false
    });
    this.questionIndex.set(0);
  }

  retake() {
    const quiz = this.session()?.quiz;
    if (quiz) this.start(quiz);
  }

  select(optionId: string) {
    const question = this.currentQuestion();
    if (!question || this.isCurrentQuestionChecked()) return;
    const selectedOptionIds = this.selectedOptionIds();
    let updatedSelectedOptionIds: string[];
    if (question.type !== 'multiple_choice') {
      updatedSelectedOptionIds = [optionId];
    } else if (selectedOptionIds.includes(optionId)) {
      updatedSelectedOptionIds = selectedOptionIds.filter(
        (selectedOptionId) => selectedOptionId !== optionId
      );
    } else {
      updatedSelectedOptionIds = [...selectedOptionIds, optionId];
    }
    this.session.update(
      (currentSession) =>
        currentSession && {
          ...currentSession,
          answers: {
            ...currentSession.answers,
            [question.id]: updatedSelectedOptionIds
          }
        }
    );
  }

  check() {
    const question = this.currentQuestion();
    if (question)
      this.session.update(
        (currentSession) =>
          currentSession && {
            ...currentSession,
            checked: { ...currentSession.checked, [question.id]: true }
          }
      );
  }

  moveQuestionIndex(indexOffset: number) {
    this.questionIndex.update((currentIndex) =>
      Math.min(this.questionCount() - 1, Math.max(0, currentIndex + indexOffset))
    );
  }

  submit() {
    this.session.update(
      (currentSession) => currentSession && { ...currentSession, submitted: true }
    );
  }
}
