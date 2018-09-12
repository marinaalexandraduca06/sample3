import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService, CityService } from 'app/services';
import { UserModel, CityModel } from 'app/models';

@Component ({
  selector: 'app-my-profile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MyprofileComponent implements OnInit {
  public user: UserModel;
  public visitedCities: CityModel[];
  public wishListCities: CityModel[];

  constructor(
    public userService: UserService,
    private router: Router,
    private cityService: CityService
  ) {}

  public ngOnInit(): void {
    if (!this.userService.isConnected) {
      this.router.navigateByUrl('home');
    }
    this.user = this.userService.connectedUser;
    this.visitedCities = this.cityService.getVisitedCities();
    console.log(this.visitedCities)
    this.wishListCities = this.cityService.getWishListCities();
  }
}
