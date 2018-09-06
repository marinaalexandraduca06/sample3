import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MenuComponent } from '../menu/menu.component';
import { UserService } from '../../../services/user.service';
import { IDropdownItem } from '../../../app.interfaces';
import { TranslateService } from '../../../services/translate.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './topBar.component.html',
  styleUrls: ['./topBar.component.scss']
})

export class TopBarComponent implements OnInit {
  public isConnected: boolean;
  public connectedUser: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public userSVC: UserService,
    private translateService: TranslateService
  ) { }

  public ngOnInit(): void {
    //
  }

  public logout(): void {
    this.userSVC.logout();
    this.router.navigate(['']);
  }

  public changeLanguage(lang: string): void {
    this.translateService.setTranslationLanguage(lang);
  }
}
