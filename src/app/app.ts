import { DOCUMENT } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, MatButtonModule, MatIconModule],
  templateUrl: './app.html'
})
export class App {
  private readonly document = inject(DOCUMENT);
  darkMode = signal(true);

  constructor() {
    const savedTheme = this.document.defaultView?.localStorage.getItem('quizforge-theme');
    const theme = savedTheme === 'light' ? 'light' : 'dark';
    this.darkMode.set(theme === 'dark');
    this.document.documentElement.dataset['theme'] = theme;
  }

  toggleTheme() {
    const theme = this.darkMode() ? 'light' : 'dark';
    this.darkMode.set(theme === 'dark');
    this.document.documentElement.dataset['theme'] = theme;
    this.document.defaultView?.localStorage.setItem('quizforge-theme', theme);
  }
}
