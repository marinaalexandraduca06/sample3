import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  SeeSuggestionsComponent,
  HomeComponent,
  TopsComponent,
  AllDestinationsComponent,
  SuggestComponent,
  MyprofileComponent,
  LoginComponent,
  SignupComponent,
  AdminComponent,
  ManageUsersComponent
} from 'app/components';

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
        path: 'tops',
        component: TopsComponent
      },
      {
        path: 'alldestinations',
        component: AllDestinationsComponent
      },
      {
        path: 'edit-destinations',
        component: AllDestinationsComponent
      },
      {
        path: 'suggest',
        component: SuggestComponent
      },
      {
        path: 'manage-users',
        component: ManageUsersComponent
      },
      {
        path: 'see-suggestions',
        component: SeeSuggestionsComponent
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
