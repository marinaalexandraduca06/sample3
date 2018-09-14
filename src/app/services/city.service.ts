import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { CityModel } from 'app/models';
import { TouristicStatusService } from 'app/services/touristic-status.service';
import { TouristicStatus } from 'app/enums/app.enums';
import { UserService } from 'app/services';
import { API_base } from 'environments/environment';

@Injectable()
export class CityService {
  constructor(
    private touristicStatusService: TouristicStatusService,
    private userService: UserService,
    private httpClient: HttpClient
  ) {}

  public async getCities(countryId: string, isRo: boolean): Promise<CityModel[]> {
    const url = `${API_base}/cities?filter[countryId]=${countryId}`;
    const options = {
      params: {
        sort: isRo ? 'nameRo' : 'nameEn'
      }
    };
    const cities = await this.httpClient.get(url, options).toPromise();
    return cities['result'].docs.map((city) => new CityModel(city));
  }

  public async create(city: CityModel): Promise<CityModel> {
    const url = `${API_base}/cities`;
    const newCity = await this.httpClient.post(url, city).toPromise();
    return new CityModel(newCity['result']);
  }

  public async update(city: CityModel): Promise<CityModel> {
    const url = `${API_base}/cities/${city._id}`;
    const newCity = await this.httpClient.patch(url, city).toPromise();
    return new CityModel(newCity['result']);
  }

  public getCitiesByRating(): CityModel[] {
  //   const cities = this.cities.sort((city1, city2) => city2.rating - city1.rating).slice(0, 9);
  //   if (this.userService.connectedUser) {
  //     this.setCitiesStatus(cities);
  //  }
  //   return cities.map((city) => new CityModel(city));
    return [];
  }

  public getCitiesByVisitors(): CityModel[] {
  //   const cities = this.cities.sort((city1, city2) => city2.nrOfVisitors - city1.nrOfVisitors).slice(0, 9);
  //   if (this.userService.connectedUser) {
  //     this.setCitiesStatus(cities);
  //  }
  //   return cities.map((city) => new CityModel(city));
    return [];
  }

  public getVisitedCities(): CityModel[] {
    // const citiesIds: number[] = this.touristicStatusService.getVisitedCitiesIds();
    // const visitedCities: CityModel[] = [];
    // this.cities.forEach((city) => {
    //   if (citiesIds.find((id) => city._id === id)) {
    //     city.status = TouristicStatus.VISITED;
    //     visitedCities.push(city);
    //   }
    // });
    // return visitedCities;
    return [];
  }

  public getWishListCities(): CityModel[] {
    // const citiesIds: number[] = this.touristicStatusService.getWishListCitiesIds();
    // const wishListCities: CityModel[] = [];
    // this.cities.forEach((city) => {
    //   if (citiesIds.find((id) => city._id === id)) {
    //     city.status = TouristicStatus.WISH_LIST;
    //     wishListCities.push(city);
    //   }
    // });
    // return wishListCities;
    return [];
  }

  private setCitiesStatus(cities: CityModel[]): void {
    const visitedCities = this.getVisitedCities();
    const wishListCities = this.getWishListCities();
    cities.forEach((city) => {
      if (visitedCities.find((ct) => ct._id === city._id)) {
        city.status = TouristicStatus.VISITED;
      } else if (wishListCities.find((ct) => ct._id === city._id)) {
        city.status = TouristicStatus.WISH_LIST;
      } else {
        city.status = TouristicStatus.BACKLOG;
      }
    });
  }
}
