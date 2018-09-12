import { Injectable } from '@angular/core';
import { DestinationModel } from 'app/models';

@Injectable()
export class DestinationService {
  public destinations: DestinationModel[] = [
    new DestinationModel({
      id: 1,
      cityId: 1,
      nameRo: 'Ochiul Londrei',
      nameEn: 'London Eye',
      url: 'https://en.wikipedia.org/wiki/London_Eye'
    }),
    new DestinationModel({
      id: 2,
      cityId: 1,
      nameRo: 'Podul Turn',
      nameEn: 'Tower Bridge',
      url: 'https://en.wikipedia.org/wiki/Tower_Bridge'
    }),
    new DestinationModel({
      id: 3,
      cityId: 2,
      nameRo: 'Turnul Eiffel',
      nameEn: 'Eiffel Tower',
      url: 'https://ro.wikipedia.org/wiki/Turnul_Eiffel'
    }),
    new DestinationModel({
      id: 4,
      cityId: 2,
      nameRo: 'Muzeul Luvru',
      nameEn: 'Louvre Museum',
      url: 'https://en.wikipedia.org/wiki/Louvre'
    })
  ];

  public getDestinations(cityId: number): DestinationModel[] {
    return this.destinations.filter((country) => country.cityId === cityId);
  }
}
