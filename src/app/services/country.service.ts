import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CountryModel } from 'app/models';
import { API_base } from 'environments/environment';

@Injectable()
export class CountryService {
  public constructor(
    private httpClient: HttpClient
  ) {}

  public async getCountries(continentId: string, isRo: boolean): Promise<CountryModel[]> {
    const url = `${API_base}/countries?filter[continentId]=${continentId}`;
    const options = {
      params: {
        sort: isRo ? 'nameRo' : 'nameEn'
      }
    };
    const countries = await this.httpClient.get(url, options).toPromise();
    return countries['result'].docs.map((country) => new CountryModel(country));
  }

  public async create(country: CountryModel): Promise<CountryModel> {
    const url = `${API_base}/countries`;
    const newCountry = await this.httpClient.post(url, country).toPromise();
    return new CountryModel(newCountry['result']);
  }
}
