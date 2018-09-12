import { Injectable } from '@angular/core';

import { CityModel } from 'app/models';
import { TouristicStatusService } from 'app/services/touristic-status.service';
import { TouristicStatus } from 'app/enums/app.enums';
import { UserService } from 'app/services';

@Injectable()
export class CityService {
  public cities: CityModel[] = [
    new CityModel({
      id: 1,
      countryId: 5,
      nameRo: 'Londra',
      nameEn: 'London',
      descriptionRo: 'Descriere Londra Ro',
      descriptionEn: 'Descriere Londra En',
      rating: 3.7,
      nrOfRatings: 31,
      nrOfVisitors: 23825553,
      destinations: []
    }),
    new CityModel({
      id: 2,
      countryId: 4,
      nameRo: 'Paris',
      nameEn: 'Paris',
      descriptionRo: 'Descriere Paris Ro',
      descriptionEn: 'Descriere Paris En',
      rating: 4.9,
      nrOfRatings: 23,
      nrOfVisitors: 23423,
      destinations: []
    }),
  ];

  constructor(
    private touristicStatusService: TouristicStatusService,
    private userService: UserService
  ) {}

  public getCities(countryId: number): CityModel[] {
    const cities = this.cities.filter((city) => city.countryId === countryId);
    if (this.userService.connectedUser) {
       this.setCitiesStatus(cities);
    }
    return cities.map((city) => new CityModel(city));
  }

  public getCitiesByRating(): CityModel[] {
    const cities = this.cities.sort((city1, city2) => city2.rating - city1.rating).slice(0, 9);
    if (this.userService.connectedUser) {
      this.setCitiesStatus(cities);
   }
    return cities.map((city) => new CityModel(city));
  }

  public getCitiesByVisitors(): CityModel[] {
    const cities = this.cities.sort((city1, city2) => city2.nrOfVisitors - city1.nrOfVisitors).slice(0, 9);
    if (this.userService.connectedUser) {
      this.setCitiesStatus(cities);
   }
    return cities.map((city) => new CityModel(city));
  }

  public getVisitedCities(): CityModel[] {
    const citiesIds: number[] = this.touristicStatusService.getVisitedCitiesIds();
    const visitedCities: CityModel[] = [];
    this.cities.forEach((city) => {
      if (citiesIds.find((id) => city.id === id)) {
        city.status = TouristicStatus.VISITED;
        visitedCities.push(city);
      }
    });
    return visitedCities;
  }

  public getWishListCities(): CityModel[] {
    const citiesIds: number[] = this.touristicStatusService.getWishListCitiesIds();
    const wishListCities: CityModel[] = [];
    this.cities.forEach((city) => {
      if (citiesIds.find((id) => city.id === id)) {
        city.status = TouristicStatus.WISH_LIST;
        wishListCities.push(city);
      }
    });
    return wishListCities;
  }

  private setCitiesStatus(cities: CityModel[]): void {
    const visitedCities = this.getVisitedCities();
    const wishListCities = this.getWishListCities();
    cities.forEach((city) => {
      if (visitedCities.find((ct) => ct.id === city.id)) {
        city.status = TouristicStatus.VISITED;
      } else if (wishListCities.find((ct) => ct.id === city.id)) {
        city.status = TouristicStatus.WISH_LIST;
      } else {
        city.status = TouristicStatus.BACKLOG;
      }
    });
  }
}
