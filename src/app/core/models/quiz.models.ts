export type QuestionType = 'single_choice' | 'multiple_choice' | 'true_false';
export const QUESTION_TYPES: QuestionType[] = ['single_choice', 'multiple_choice', 'true_false'];

export interface QuizOption {
  id: string;
  text: string;
  explanation?: string;
}
export interface QuizQuestion {
  id: string;
  type: QuestionType;
  question: string;
  options: QuizOption[];
  correctAnswers: string[];
  hint?: string;
  explanation?: string;
  tags?: string[];
}
export interface Quiz {
  id: string;
  title: string;
  description?: string;
  subject: string;
  category?: string;
  difficulty?: string;
  language?: string;
  passingScore?: number;
  questions: QuizQuestion[];
}
export interface QuizSettings {
  shuffleQuestions: boolean;
  shuffleAnswers: boolean;
  showHints: boolean;
  showExplanations: boolean;
  allowUnanswered: boolean;
}
export const DEFAULT_SETTINGS: QuizSettings = {
  shuffleQuestions: false,
  shuffleAnswers: false,
  showHints: true,
  showExplanations: true,
  allowUnanswered: true
};
/** Session state is separate from the(immutable) quiz definition. */
export interface QuizSession {
  quiz: Quiz; // working copy, possibly shuffled
  settings: QuizSettings;
  answers: Record<string, string[]>;
  checked: Record<string, boolean>;
  submitted: boolean;
}
export type OptionState = 'correct' | 'incorrect' | 'missed' | 'neutral';
export type QuestionStatus = 'correct' | 'incorrect' | 'unanswered';
