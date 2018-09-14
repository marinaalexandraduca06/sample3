import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { API_base } from 'environments/environment';
import { ContinentModel } from 'app/models';

@Injectable()
export class ContinentService {
  public constructor(
    private httpClient: HttpClient
  ) {}

  public async getContinents(isRo: boolean): Promise<ContinentModel[]> {
    const url = `${API_base}/continents`;
    const options = {
      params: {
        sort: isRo ? 'nameRo' : 'nameEn'
      }
    };
    const continents = await this.httpClient.get(url, options).toPromise();
    return continents['result'].docs.map((continent) => new ContinentModel(continent));
  }
}
