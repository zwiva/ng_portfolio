import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    title: 'Home',
    loadComponent: () => import('./features/home/components/view/view.component').then(mod => mod.ViewComponent)
  },
  {
    path: 'projects',
    title: 'projects',
    loadComponent: () => import('./features/projects/components/view/view.component').then(mod => mod.ViewComponent)
  },
  {
    path: 'samples',
    title: 'samples',
    loadComponent: () => import('./features/samples/components/view/view.component').then(mod => mod.ViewComponent)
  },
  {
    path: 'playground',
    title: 'playground',
    loadComponent: () => import('./features/playground/components/view/view.component').then(mod => mod.ViewComponent)
  },
  {
    path: 'xlsx_feature',
    title: 'xlsx',
    loadComponent: () => import('./features/xlsx_feature/components/view/view.component').then(mod => mod.ViewComponent)
  },
  {
    path: 'error-page',
    title: 'error',
    loadComponent: () => import('./features/error_page/components/view/view.component').then(mod => mod.ViewComponent)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'error-page'
  },
];
