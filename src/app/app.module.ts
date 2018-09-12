import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CKEditorModule } from 'ng2-ckeditor';

import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
import { TranslatePipe } from './pipes/translate.pipe';
import { TranslateService } from './services/translate.service';

import { environment } from 'environments/environment';
import { ROUTES } from './app.routes';
import { AppState, InternalStateType } from './app.service';

import '../styles/styles.scss';
import '../styles/headings.css';

import { COMPONENTS } from './components';
import { DIRECTIVES } from './directives';
import { PIPES } from './pipes';
import { SERVICES } from './services';

const APP_PROVIDERS = [
  AppState
];

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    FormsModule,
    CKEditorModule,
    HttpClientModule,
    ROUTES,
  ],
  providers: [
    APP_PROVIDERS,
    ...SERVICES
  ],
})
export class AppModule {}
