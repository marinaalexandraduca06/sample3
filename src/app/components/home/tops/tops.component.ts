import { Component, OnInit } from '@angular/core';

import { CityService } from 'app/services';
import { CityModel } from 'app/models';

@Component ({
  selector: 'app-most-visited',
  templateUrl: './tops.component.html',
  styleUrls: ['./tops.component.scss']
})

export class TopsComponent implements OnInit {
  public topCitiesByRating: CityModel[];
  public topCitiesByVisitors: CityModel[];
  public byRating: boolean = true;

  constructor(
    private cityService: CityService
  ) {}
  public ngOnInit(): void {
    this.topCitiesByRating = this.cityService.getCitiesByRating();
  }

  public toggle(byRating: boolean): void {
    this.byRating = byRating;
    if (byRating) {
      this.topCitiesByRating = this.cityService.getCitiesByRating();
    } else {
      this.topCitiesByVisitors = this.cityService.getCitiesByVisitors();
    }
  }
}
