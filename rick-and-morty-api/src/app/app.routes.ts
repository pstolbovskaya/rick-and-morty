import { Routes } from '@angular/router';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {HomePageComponent} from './pages/home-page/home-page.component';

export const routes: Routes = [

  {
    path: 'Home',
    component: HomePageComponent,
    title: 'Home',
  },
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Not Found',
  },
];
