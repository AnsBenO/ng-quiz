import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { QuizParserService } from '../../core/services/quiz-parser.service';
import { QuizService } from '../../core/services/quiz.service';

@Component({
  selector: 'app-quiz-import',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './quiz-import.component.html'
})
export class QuizImportComponent {
  private readonly parser = inject(QuizParserService);
  private readonly quizzes = inject(QuizService);
  errors = signal<string[]>([]);
  fileName = signal('');

  async onFiles(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    this.errors.set([]);
    const files = Array.from(fileInput.files ?? []);
    const fileContents = await Promise.all(files.map((file) => file.text().catch(() => null)));
    for (const [fileIndex, file] of files.entries()) {
      const fileContent = fileContents[fileIndex];
      if (fileContent === null) {
        this.fileName.set(file.name);
        this.errors.set(['The file could not be read.']);
        continue;
      }
      try {
        const { quiz, errors: parseErrors } = this.parser.parse(fileContent);
        if (quiz) this.quizzes.add(quiz);
        else {
          this.fileName.set(file.name);
          this.errors.set(parseErrors);
        }
      } catch {
        this.fileName.set(file.name);
        this.errors.set(['The file could not be read.']);
      }
    }
    fileInput.value = '';
  }
}
