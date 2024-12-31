import { Routes } from '@angular/router';
import { BoatDetailsComponent } from './pages/boat-details/boat-details.component';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./pages/home/home.component').then(c => c.HomeComponent),
    },
    {
        path: 'boats/:id/details',
        loadComponent: () =>
            import('./pages/boat-details/boat-details.component').then(c => c.BoatDetailsComponent),
    },
];
