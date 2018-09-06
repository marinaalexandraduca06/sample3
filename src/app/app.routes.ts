import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { MostvisitedComponent } from './components/home/mostvisited/mostvisited.component';
import { SuggestComponent } from './components/home/suggest/suggest.component';
import { MyprofileComponent } from './components/home/myprofile/myprofile.component';
import { AdminComponent } from './components/admin/admin.component.';
import { AllDestinationsComponent } from './components/home/all-destinations/all-destinations.component';

const router: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'alldestinations',
        pathMatch: 'full'
      },
      {
        path: 'mostvisited',
        component: MostvisitedComponent
      },
      {
        path: 'alldestinations',
        component: AllDestinationsComponent
      },
      {
        path: 'suggest',
        component: SuggestComponent
      },
      {
        path: 'myprofile',
        component: MyprofileComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];

export const ROUTES: ModuleWithProviders = RouterModule.forRoot(router);
