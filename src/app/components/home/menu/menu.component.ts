import { Component } from '@angular/core';

import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  constructor(
    public userService: UserService
  ) {}
}
