import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { QuizSettings } from '../../core/models/quiz.models';
import { QuizService } from '../../core/services/quiz.service';
import { QuizSessionService } from '../../core/services/quiz-session.service';
import { QuizImportComponent } from '../quiz-import/quiz-import.component';

@Component({
  selector: 'app-quiz-list',
  imports: [
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatSlideToggleModule,
    QuizImportComponent
  ],
  templateUrl: './quiz-list.component.html'
})
export class QuizListComponent {
  private readonly quizService = inject(QuizService);
  private readonly sessionService = inject(QuizSessionService);
  private readonly router = inject(Router);

  quizzes = this.quizService.quizzes;

  settings = this.sessionService.settings;

  activeSession = this.sessionService.session;

  toggles: { key: keyof QuizSettings; label: string }[] = [
    { key: 'shuffleQuestions', label: 'Shuffle questions' },
    { key: 'shuffleAnswers', label: 'Shuffle answers' },
    { key: 'showHints', label: 'Show hints' },
    { key: 'showExplanations', label: 'Show explanations' },
    { key: 'allowUnanswered', label: 'Allow unanswered' }
  ];

  updateSetting(settingKey: keyof QuizSettings, isEnabled: boolean) {
    this.settings.update((currentSettings) => ({
      ...currentSettings,
      [settingKey]: isEnabled
    }));
  }

  start(quizId: string) {
    const quiz = this.quizzes().find((availableQuiz) => availableQuiz.id === quizId);
    if (!quiz) return;
    this.sessionService.start(quiz);
    void this.router.navigate(['/play']);
  }
}
