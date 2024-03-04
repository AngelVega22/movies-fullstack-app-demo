import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./movies/movies.component')
  },
  {
    path: 'showtime/:movieId',
    loadComponent: () => import('./showtimes/showtimes.component')
  },
  {
    path: 'reservation/:showtimeId',
    loadComponent: () => import('./reservation/reservation.component')
  },
  {
    path: 'success',
    loadComponent: () => import('./succespage/succespage.component')
  },

];
