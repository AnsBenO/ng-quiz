import { DOCUMENT } from '@angular/common';
import { Component, DestroyRef, inject, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

type ColorMode = 'system' | 'light' | 'dark';
type ColorPalette = 'ocean' | 'forest' | 'violet' | 'amber';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule
  ],
  templateUrl: './app.html'
})
export class App {
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);
  readonly colorMode = signal<ColorMode>('system');
  readonly colorPalette = signal<ColorPalette>('amber');
  private readonly systemPrefersDark = signal(true);

  constructor() {
    const window = this.document.defaultView;
    const storage = window?.localStorage;
    const savedMode = storage?.getItem('quizforge-color-mode');
    const savedPalette = storage?.getItem('quizforge-color-palette');
    const legacyTheme = storage?.getItem('quizforge-theme');

    if (this.isColorMode(savedMode)) {
      this.colorMode.set(savedMode);
    } else if (legacyTheme === 'light' || legacyTheme === 'dark') {
      this.colorMode.set(legacyTheme);
      storage?.setItem('quizforge-color-mode', legacyTheme);
    }

    if (this.isColorPalette(savedPalette)) {
      this.colorPalette.set(savedPalette);
    }

    const mediaQuery =
      typeof window?.matchMedia === 'function'
        ? window.matchMedia('(prefers-color-scheme: dark)')
        : undefined;
    if (mediaQuery) {
      this.systemPrefersDark.set(mediaQuery.matches);
      const onPreferenceChange = (event: MediaQueryListEvent) => {
        this.systemPrefersDark.set(event.matches);
        if (this.colorMode() === 'system') {
          this.applyTheme();
        }
      };
      mediaQuery.addEventListener('change', onPreferenceChange);
      this.destroyRef.onDestroy(() => mediaQuery.removeEventListener('change', onPreferenceChange));
    }

    this.applyTheme();
  }

  setColorMode(mode: ColorMode) {
    this.colorMode.set(mode);
    this.document.defaultView?.localStorage.setItem('quizforge-color-mode', mode);
    this.applyTheme();
  }

  setColorPalette(palette: ColorPalette) {
    this.colorPalette.set(palette);
    this.document.defaultView?.localStorage.setItem('quizforge-color-palette', palette);
    this.applyTheme();
  }

  private applyTheme() {
    const theme =
      this.colorMode() === 'system'
        ? this.systemPrefersDark()
          ? 'dark'
          : 'light'
        : this.colorMode();
    this.document.documentElement.dataset['theme'] = theme;
    this.document.documentElement.dataset['palette'] = this.colorPalette();
  }

  private isColorMode(value: string | null | undefined): value is ColorMode {
    return value === 'system' || value === 'light' || value === 'dark';
  }

  private isColorPalette(value: string | null | undefined): value is ColorPalette {
    return value === 'ocean' || value === 'forest' || value === 'violet' || value === 'amber';
  }
}
