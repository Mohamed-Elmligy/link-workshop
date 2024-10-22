import { Routes } from '@angular/router';

import {
  authModuleGuard,
  mainModuleGuard,
} from './core/guards/authentication.guard';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'main' },
  //   {
  //     path: 'auth',
  //     title: 'Authentication',
  //     // if we have auth cycle
  //     loadComponent: () => import('./layouts/auth-layout/auth-layout.component'),
  //     loadChildren: () => import('./modules/auth/auth.routes'),
  //     // canMatch: [authModuleGuard],
  //   },
  {
    path: 'main',
    loadComponent: () => import('./layouts/main-layout/main-layout.component'),
    loadChildren: () => import('./modules/main/main.routes'),
    // canMatch: [mainModuleGuard], if we have auth cycle
  },

  {
    path: 'unauthorized',
    title: 'Unauthorized user',
    loadComponent: () =>
      import('./modules/errors/pages/un-authorizes/un-authorizes.component'),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./modules/errors/pages/not-found/not-found.component'),
  },
];
