import { Routes } from '@angular/router';

const mainRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },

  {
    path: 'home',
    title: 'Link Development',
    loadComponent: () => import('./home/home.component'),
  },
];
export default mainRoutes;
