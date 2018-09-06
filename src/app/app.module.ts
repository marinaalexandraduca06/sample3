import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { TopBarComponent } from './components/home/topBar/topBar.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/home/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { SignupComponent } from './components/signup/signup.component';

import { MostvisitedComponent } from './components/home/mostvisited/mostvisited.component';
import { SuggestComponent } from './components/home/suggest/suggest.component';
import { MyprofileComponent } from './components/home/myprofile/myprofile.component';
import { UserService } from './services/user.service';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { AdminComponent } from './components/admin/admin.component.';
import { TranslatePipe } from './pipes/translate.pipe';
import { TranslateService } from './services/translate.service';
import { DropdownComponent } from './components/shared/dropdown/dropdown.component';
import { AllDestinationsComponent } from './components/home/all-destinations/all-destinations.component';

import { environment } from 'environments/environment';
import { ROUTES } from './app.routes';
import { AppState, InternalStateType } from './app.service';

import '../styles/styles.scss';
import '../styles/headings.css';

const APP_PROVIDERS = [
  AppState
];

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    HomeComponent,
    TopBarComponent,
    MenuComponent,
    LoginComponent,
    ErrorComponent,
    SignupComponent,
    AdminComponent,
    AdminLoginComponent,
    AllDestinationsComponent,
    MostvisitedComponent,
    SuggestComponent,
    MyprofileComponent,
    TranslatePipe,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpClientModule,
    ROUTES,
  ],
  providers: [
    APP_PROVIDERS,
    UserService,
    TranslateService,
  ],
})
export class AppModule {}
