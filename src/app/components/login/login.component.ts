import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuComponent } from '../home/menu/menu.component';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public username: string;
  public password: string;
  public noUsername: boolean;
  public noPassword: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public userSVC: UserService
  ) {}

  public ngOnInit(): void {
    this.noUsername = false;
    this.noPassword = false;
  }

  public checkForUsername(): void {
    if (this.username && this.username != "") {
      this.noUsername = false;
    } else {
      this.noUsername = true;
    }
  }

  public checkForPassword(): void {
    if (this.password && this.password != "") {
      this.noPassword = false;
    } else {
      this.noPassword = true;
    }
  }

  public login(): void {
    this.checkForUsername();
    this.checkForPassword();

    if (!this.noUsername && !this.noPassword) {
      // localStorage.setItem("curentUser", this.username);
      // localStorage.setItem("isConnected", "true");
      this.userSVC.login(this.username);
      this.router.navigate(['']);
    } 
  }
}
