import { Injectable } from '@angular/core';
import { ContinentModel } from 'app/models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ContinentService {
  // public getContinents(): ContinentModel[] {
  //   const continents: ContinentModel[] = [];
  //   continents.push(new ContinentModel({
  //     id: 1,
  //     nameRo: 'Africa',
  //     nameEn: 'Africa'
  //   }));
  //   continents.push(new ContinentModel({
  //     id: 2,
  //     nameRo: 'Asia',
  //     nameEn: 'Asia'
  //   }));
  //   continents.push(new ContinentModel({
  //     id: 3,
  //     nameRo: 'Europa',
  //     nameEn: 'Europe'
  //   }));
  //   continents.push(new ContinentModel({
  //     id: 4,
  //     nameRo: 'America de Nord',
  //     nameEn: 'North America'
  //   }));
  //   continents.push(new ContinentModel({
  //     id: 5,
  //     nameRo: 'America de Sud',
  //     nameEn: 'South America'
  //   }));
  //   return continents;
  // }

  public constructor(
    private httpClient: HttpClient
  ) {}

  public getContinents(): Observable<any> {
    // const url = 'http://localhost:3000/continents';
    const url = 'https://sample-be.herokuapp.com/continents';
    return this.httpClient.get(url);
  }

  // public create(): Observable<any> {
  //   const url = 'http://localhost:3000/continents';
  //   return this.httpClient.post(url, new ContinentModel({
  //     nameRo: 'America de Sud',
  //     nameEn: 'South America'
  //   }));
  // }
}
