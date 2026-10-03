import { Component, computed, effect, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { QuizSessionService } from '../../core/services/quiz-session.service';
import { QuizScoringService } from '../../core/services/quiz-scoring.service';
import { OptionListComponent } from '../../shared/components/option-list.component';

@Component({
  selector: 'app-quiz-player',
  imports: [MatButtonModule, MatProgressBarModule, OptionListComponent, RouterLink],
  templateUrl: './quiz-player.component.html'
})
export class QuizPlayerComponent {
  quizSessionService = inject(QuizSessionService);
  private readonly scoringService = inject(QuizScoringService);
  private readonly router = inject(Router);
  isHintVisible = signal(false);

  constructor() {
    effect(() => {
      this.quizSessionService.questionIndex();
      this.isHintVisible.set(false);
    });
  }

  questionResult = computed(() => {
    const currentQuestion = this.quizSessionService.currentQuestion();
    return currentQuestion
      ? this.scoringService.status(currentQuestion, this.quizSessionService.selectedOptionIds())
      : 'unanswered';
  });

  isAnswerBlocked = computed(
    () =>
      !this.quizSessionService.session()?.settings.allowUnanswered &&
      !this.quizSessionService.selectedOptionIds().length
  );

  finish() {
    this.quizSessionService.submit();
    void this.router.navigate(['/results']);
  }
}
