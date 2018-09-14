import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { CountryModel, CityModel, DestinationModel } from 'app/models';
import { CityService, TranslateService, DestinationService } from 'app/services';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})

export class CountryComponent implements OnInit {
  @Input() public country: CountryModel;
  @Input() public isInEditMode: boolean;

  public cities: CityModel[];
  public isRo: boolean = false;
  public visible: boolean = false;
  public link = '';
  public addingCity: boolean = false;
  public newCity: CityModel;
  public addingTouristicPlace: boolean = false;
  public newTouristicPlace: DestinationModel;

  constructor(
    public sanitizer: DomSanitizer,
    private cityService: CityService,
    private destinationService: DestinationService,
    private translateService: TranslateService
  ) {}

  public async ngOnInit(): Promise<void> {
    this.translateService.isRo.subscribe(async (isRo) => {
      this.isRo = isRo;
      this.cities = await this.cityService.getCities(this.country._id, this.isRo);
    });
  }

  public toggleAddCity(open: boolean): void {
    this.addingCity = open;
    this.newCity = new CityModel();
    this.newTouristicPlace = new DestinationModel();
  }

  public toggleTouristicPlace(open: boolean): void {
    this.addingTouristicPlace = open;
    this.newTouristicPlace = new DestinationModel();
  }

  public async addCity(): Promise<void> {
    if (!this.newCity._id) {
      this.newCity = await this.cityService.create(new CityModel({
        countryId: this.country._id,
        descriptionRo: this.newCity.descriptionRo,
        descriptionEn: this.newCity.descriptionEn,
        nameEn: this.newCity.nameEn,
        nameRo: this.newCity.nameRo,
        destinations: this.newCity.destinations
      }));
      this.cities.push(this.newCity);
    } else {
      await this.cityService.update(this.newCity);
    }
    if (!this.addingTouristicPlace) {
      this.toggleAddCity(false);
    }
  }

  public async addTouristicPlace(): Promise<void> {
    if (!this.newCity._id) {
      await this.addCity();
    }
    const newDestination = await this.destinationService.create(new DestinationModel({
      cityId: this.newCity._id,
      nameEn: this.newTouristicPlace.nameEn,
      nameRo: this.newTouristicPlace.nameRo,
      url: this.newTouristicPlace.url
    }));
    this.newCity.destinations.push(newDestination);
    await this.cityService.update(this.newCity);
    this.toggleTouristicPlace(false);
  }

  public get addEnabled(): boolean {
    return !!this.newCity.nameRo &&
           !!this.newCity.nameEn &&
           !!this.newCity.descriptionRo &&
           !!this.newCity.descriptionEn &&
           !this.addingTouristicPlace;
  }

  public get addTouristicPlaceEnabled(): boolean {
    return !!this.newTouristicPlace.nameEn &&
           !!this.newTouristicPlace.nameRo &&
           !!this.newTouristicPlace.url;
  }

  public show(url: string): void {
    this.visible = true;
    this.link = url;
  }

  public close(): void {
    this.visible = false;
  }
}
