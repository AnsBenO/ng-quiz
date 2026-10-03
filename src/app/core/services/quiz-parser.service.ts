import { Injectable, inject } from '@angular/core';
import { Quiz } from '../models/quiz.models';
import { QuizValidatorService } from './quiz-validator.service';

export interface ParseResult {
  quiz?: Quiz;
  errors: string[];
}

@Injectable({ providedIn: 'root' })
export class QuizParserService {
  private readonly validator = inject(QuizValidatorService);

  parse(jsonText: string): ParseResult {
    let parsedJson: { quiz: Quiz };

    try {
      parsedJson = JSON.parse(jsonText);
    } catch (parseError) {
      return { errors: [`Invalid JSON: ${(parseError as Error).message}`] };
    }

    const quizData = parsedJson?.quiz ?? parsedJson;
    const validationErrors = this.validator.validate(quizData);

    if (validationErrors.length) return { errors: validationErrors };

    const quiz: Quiz = structuredClone(quizData);

    for (const question of quiz.questions) {
      if (question.type === 'true_false' && !question.options)
        question.options = [
          { id: 'true', text: 'True' },
          { id: 'false', text: 'False' }
        ];
    }
    return { quiz, errors: [] };
  }
}
