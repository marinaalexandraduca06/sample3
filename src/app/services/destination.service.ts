import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DestinationModel } from 'app/models';
import { API_base } from 'environments/environment';

@Injectable()
export class DestinationService {
  // public destinations: DestinationModel[] = [
  //   new DestinationModel({
  //     id: 1,
  //     cityId: 1,
  //     nameRo: 'Ochiul Londrei',
  //     nameEn: 'London Eye',
  //     url: 'https://en.wikipedia.org/wiki/London_Eye'
  //   }),
  //   new DestinationModel({
  //     id: 2,
  //     cityId: 1,
  //     nameRo: 'Podul Turn',
  //     nameEn: 'Tower Bridge',
  //     url: 'https://en.wikipedia.org/wiki/Tower_Bridge'
  //   }),
  //   new DestinationModel({
  //     id: 3,
  //     cityId: 2,
  //     nameRo: 'Turnul Eiffel',
  //     nameEn: 'Eiffel Tower',
  //     url: 'https://ro.wikipedia.org/wiki/Turnul_Eiffel'
  //   }),
  //   new DestinationModel({
  //     id: 4,
  //     cityId: 2,
  //     nameRo: 'Muzeul Luvru',
  //     nameEn: 'Louvre Museum',
  //     url: 'https://en.wikipedia.org/wiki/Louvre'
  //   })
  // ];

  constructor(
    private httpClient: HttpClient
  ) {}

  public async getDestinations(cityId: string, isRo: boolean): Promise<DestinationModel[]> {
    const url = `${API_base}/destinations?filter[cityId]=${cityId}`;
    const options = {
      params: {
        sort: isRo ? 'nameRo' : 'nameEn'
      }
    };
    const destinations = await this.httpClient.get(url, options).toPromise();
    return destinations['result'].docs.map((destination) => new DestinationModel(destination));
  }

  public async create(city: DestinationModel): Promise<DestinationModel> {
    const url = `${API_base}/destinations`;
    const newCity = await this.httpClient.post(url, city).toPromise();
    return new DestinationModel(newCity['result']);
  }
}
