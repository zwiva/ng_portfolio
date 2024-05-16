import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        title: 'Home',
        loadComponent: () => import('./features/home/components/view/view.component').then(mod => mod.ViewComponent)
    },
    {
        path: 'playground',
        title: 'playground',
        loadComponent: () => import('./features/playground/components/view/view.component').then(mod => mod.ViewComponent)
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
