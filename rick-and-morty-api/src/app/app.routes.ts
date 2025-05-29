import { Routes } from '@angular/router';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {DetailsComponent} from './pages/details/details.component';
import {EpisodesComponent} from './pages/episodes/episodes.component';
import {LocationsComponent} from './pages/locations/locations.component';

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
    path: 'characters',
    redirectTo: 'Home',
    pathMatch: 'full',
  },
  {
    path: 'episodes',
    component: EpisodesComponent,
  },
  {
    path: 'locations',
    component: LocationsComponent,
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Not Found',
  },

];
