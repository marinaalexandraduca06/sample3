import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../../services/user.service';
import { UserModel } from 'app/models';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent implements OnInit {
  public users: UserModel[];

  constructor(
    public userService: UserService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    if (!this.userService.hasAdminRights) {
      this.router.navigateByUrl('home');
    }
    this.users = this.userService.getUsers();
  }

  public removePermission(user: UserModel, permission: string): void {
    const index = user.permissions.findIndex((perm) => perm === permission);
    user.permissions.splice(index, 1);
  }

  public addPermission(user: UserModel, permission: string): void {
    user.permissions.push(permission);
  }
}
