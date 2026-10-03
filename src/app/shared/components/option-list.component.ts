import { Component, inject, input, output } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { OptionState, QuizOption, QuizQuestion } from '../../core/models/quiz.models';
import { QuizScoringService } from '../../core/services/quiz-scoring.service';

const STATE_CLASS: Record<OptionState, string> = {
  correct: 'border-success bg-success/10',
  incorrect: 'border-error bg-error/10',
  missed: 'border-warning bg-warning/10',
  neutral: 'border-border bg-surface'
};
const STATE_LABEL: Record<OptionState, string> = {
  correct: 'Correct selection',
  incorrect: 'Incorrect selection',
  missed: 'Missed correct answer',
  neutral: ''
};

@Component({
  selector: 'app-option-list',
  imports: [MatRadioModule, MatCheckboxModule],
  host: { class: 'block' },
  templateUrl: './option-list.component.html'
})
export class OptionListComponent {
  private readonly scoringService = inject(QuizScoringService);
  question = input.required<QuizQuestion>();
  selected = input<string[]>([]);
  revealed = input(false);
  showExplanations = input(true);
  pick = output<string>();
  stateClasses = STATE_CLASS;
  stateLabels = STATE_LABEL;

  getOptionState(option: QuizOption) {
    return this.scoringService.optionState(this.question(), this.selected(), option);
  }
}
