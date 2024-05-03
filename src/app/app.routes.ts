import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        title: 'Home',
        loadComponent: () => import('./features/home/components/view/view.component').then(mod => mod.ViewComponent)
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'home'
    },
];
