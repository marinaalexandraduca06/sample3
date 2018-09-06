import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: 'signup.component.html',
  styleUrls: ['signup.component.css']
})

export class SignupComponent implements OnInit {
  public username: string;
  public password: string;
  public confirmPassword: string;
  public noUsername: boolean;
  public noPassword: boolean;
  public noConfirmPassword: boolean;
  public passwordsDoNotCoincide: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.noUsername = false;
    this.noPassword = false;
    this.noConfirmPassword = false;
    this.passwordsDoNotCoincide = false;
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

  public checkForConfirmPassword(): void {
    if (this.confirmPassword && this.confirmPassword != "") {
      this.noConfirmPassword = false;
    } else {
      this.noConfirmPassword = true;
    }
  }

  public checkIfPasswordsCoincide(): void {
    if (this.password === this.confirmPassword) {
      this.passwordsDoNotCoincide = false;
    } else {
      this.passwordsDoNotCoincide = true;
    }
  }

  public signup(): void {
    this.checkForUsername();
    this.checkForPassword();
    this.checkForConfirmPassword();

    if (!this.noUsername && !this.noPassword && !this.noConfirmPassword){
      this.checkIfPasswordsCoincide();
      if (!this.passwordsDoNotCoincide) {
        localStorage.setItem("curentUser", this.username);
        localStorage.setItem("isConnected", "true");
        this.router.navigate(['']);
      }
    }
  }
}

