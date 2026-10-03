import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/quiz-list/quiz-list.component').then(
        (routeModule) => routeModule.QuizListComponent
      )
  },
  {
    path: 'play',
    loadComponent: () =>
      import('./features/quiz-player/quiz-player.component').then(
        (routeModule) => routeModule.QuizPlayerComponent
      )
  },
  {
    path: 'results',
    loadComponent: () =>
      import('./features/quiz-results/quiz-results.component').then(
        (routeModule) => routeModule.QuizResultsComponent
      )
  },
  {
    path: 'review',
    loadComponent: () =>
      import('./features/quiz-review/quiz-review.component').then(
        (routeModule) => routeModule.QuizReviewComponent
      )
  },
  { path: '**', redirectTo: '' }
];
