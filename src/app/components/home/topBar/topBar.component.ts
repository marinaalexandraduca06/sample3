import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MenuComponent } from '../menu/menu.component';
import { UserService } from '../../../services/user.service';
import { IDropdownItem } from '../../../app.interfaces';
import { TranslateService } from '../../../services/translate.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './topBar.component.html',
  styleUrls: ['./topBar.component.scss']
})

export class TopBarComponent {
  constructor(
    private router: Router,
    public userService: UserService,
    private translateService: TranslateService
  ) {}

  public logout(): void {
    this.userService.logout();
    this.router.navigate(['']);
  }

  public changeLanguage(lang: string): void {
    this.translateService.setTranslationLanguage(lang);
  }
}
