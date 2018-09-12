import { Injectable } from '@angular/core';
import { CountryModel } from 'app/models';

@Injectable()
export class CountryService {
  public countries: CountryModel[] = [
    new CountryModel({
      id: 1,
      continentId: 1,
      nameRo: 'Egipt',
      nameEn: 'Egypt'
    }),
    new CountryModel({
      id: 2,
      continentId: 2,
      nameRo: 'Rusia',
      nameEn: 'Russia'
    }),
    new CountryModel({
      id: 3,
      continentId: 3,
      nameRo: 'Spania',
      nameEn: 'Spain'
    }),
    new CountryModel({
      id: 4,
      continentId: 3,
      nameRo: 'Franta',
      nameEn: 'France'
    }),
    new CountryModel({
      id: 5,
      continentId: 3,
      nameRo: 'Marea Britanie',
      nameEn: 'Great Britain'
    }),
    new CountryModel({
      id: 6,
      continentId: 4,
      nameRo: 'Canada',
      nameEn: 'Canada'
    }),
    new CountryModel({
      id: 7,
      continentId: 5,
      nameRo: 'Brazilia',
      nameEn: 'Brazil'
    })
  ];

  public getCountries(continentId: number): CountryModel[] {
    return this.countries.filter((country) => country.continentId === continentId);
  }

  // public constructor(
  //   private httpClient: HttpClient
  // ) {}

  // public getCountries(continentId: number): Observable<any> {
  //   // return this.countries.filter((country) => country.continentId === continentId);  CountryModel[]
  //   const url = 'http://localhost:3000/countries';
  //   return this.httpClient.get(url);
  // }

  // public create(country: CountryModel): Observable<any> {
  //   const url = 'http://localhost:3000/countries';
  //   return this.httpClient.post(url, country);
  // }
}
