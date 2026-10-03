import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { QuizScoringService } from '../../core/services/quiz-scoring.service';
import { QuizSessionService } from '../../core/services/quiz-session.service';
import { OptionListComponent } from '../../shared/components/option-list.component';

@Component({
  selector: 'app-quiz-review',
  imports: [OptionListComponent, MatButtonModule, RouterLink],
  templateUrl: 'quiz-review.component.html'
})
export class QuizReviewComponent {
  sessionService = inject(QuizSessionService);
  scoringService = inject(QuizScoringService);
}
