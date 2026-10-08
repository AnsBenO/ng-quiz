import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    localStorage.removeItem('quizforge-theme');
    localStorage.removeItem('quizforge-color-mode');
    localStorage.removeItem('quizforge-color-palette');

    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter([])]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the app navigation and theme menu trigger', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('a[routerLink="/"]')?.textContent).toContain('QuizForge');
    expect(compiled.querySelector('button[aria-label="Theme settings"]')).toBeTruthy();
  });

  it('should migrate a saved legacy mode preference', () => {
    localStorage.setItem('quizforge-theme', 'light');

    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;

    expect(app.colorMode()).toBe('light');
    expect(localStorage.getItem('quizforge-color-mode')).toBe('light');
    expect(document.documentElement.dataset['theme']).toBe('light');
  });

  it('should apply and persist mode and palette independently', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;

    app.setColorMode('dark');
    app.setColorPalette('forest');

    expect(localStorage.getItem('quizforge-color-mode')).toBe('dark');
    expect(localStorage.getItem('quizforge-color-palette')).toBe('forest');
    expect(document.documentElement.dataset['theme']).toBe('dark');
    expect(document.documentElement.dataset['palette']).toBe('forest');
  });

  it('should apply and persist the Amber palette', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;

    app.setColorPalette('amber');

    expect(app.colorPalette()).toBe('amber');
    expect(localStorage.getItem('quizforge-color-palette')).toBe('amber');
    expect(document.documentElement.dataset['palette']).toBe('amber');
  });

  it('should follow system preference changes only while System mode is selected', () => {
    let preferenceChange: ((event: MediaQueryListEvent) => void) | undefined;
    const mediaQuery = {
      matches: false,
      addEventListener: (_: string, listener: (event: MediaQueryListEvent) => void) => {
        preferenceChange = listener;
      },
      removeEventListener: () => {}
    } as unknown as MediaQueryList;
    const originalMatchMedia = window.matchMedia;
    Object.defineProperty(window, 'matchMedia', {
      configurable: true,
      value: () => mediaQuery
    });

    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app.colorMode()).toBe('system');
    expect(document.documentElement.dataset['theme']).toBe('light');

    preferenceChange?.({ matches: true } as MediaQueryListEvent);
    expect(document.documentElement.dataset['theme']).toBe('dark');

    app.setColorMode('light');
    preferenceChange?.({ matches: true } as MediaQueryListEvent);
    expect(document.documentElement.dataset['theme']).toBe('light');

    fixture.destroy();
    Object.defineProperty(window, 'matchMedia', {
      configurable: true,
      value: originalMatchMedia
    });
  });
});
