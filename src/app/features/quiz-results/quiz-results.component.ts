import { Component, computed, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { QuizScoringService } from '../../core/services/quiz-scoring.service';
import { QuizSessionService } from '../../core/services/quiz-session.service';

@Component({
  selector: 'app-quiz-results',
  imports: [MatButtonModule, RouterLink],
  templateUrl: './quiz-results.component.html'
})
export class QuizResultsComponent {
  private readonly sessionService = inject(QuizSessionService);
  private readonly scoringService = inject(QuizScoringService);
  private readonly router = inject(Router);
  resultSummary = computed(() => {
    const quizSession = this.sessionService.session();
    return quizSession ? this.scoringService.summarize(quizSession) : null;
  });
  passingScore = computed(() => this.sessionService.session()?.quiz.passingScore ?? 70);
  hasPassed = computed(() => (this.resultSummary()?.scorePercentage ?? 0) >= this.passingScore());

  retake() {
    this.sessionService.retake();
    void this.router.navigate(['/play']);
  }
}
