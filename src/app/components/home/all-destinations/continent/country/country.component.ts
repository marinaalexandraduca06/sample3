import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { CountryModel, CityModel, DestinationModel } from 'app/models';
import { CityService, TranslateService } from 'app/services';

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
  public addingCountry: boolean = false;
  public newCityNameRo: string;
  public newCityNameEn: string;
  public newCityDescriptionRo: string;
  public newCityDescriptionEn: string;
  public newTouristicPlaces: DestinationModel[] = [];
  public addingTouristicPlace: boolean = false;
  public newTouristicPlaceNameRo: string;
  public newTouristicPlaceNameEn: string;
  public newTouristicPlaceUrl: string;

  constructor(
    public sanitizer: DomSanitizer,
    private cityService: CityService,
    private translateService: TranslateService
  ) {}

  public ngOnInit(): void {
    this.translateService.isRo.subscribe((isRo) => this.isRo = isRo);
    this.cities = this.cityService.getCities(this.country.id);
  }

  public toggleAddCity(open: boolean): void {
    this.addingCountry = open;
    this.newCityNameRo = '';
    this.newCityNameEn = '';
    this.newCityDescriptionRo = '';
    this.newCityDescriptionEn = '';
    this.newTouristicPlaces = [];
    this.newTouristicPlaceUrl = '';
    this.newTouristicPlaceNameRo = '';
    this.newTouristicPlaceNameEn = '';
  }

  public toggleTouristicPlace(open: boolean): void {
    this.addingTouristicPlace = open;
    this.newTouristicPlaceUrl = '';
    this.newTouristicPlaceNameRo = '';
    this.newTouristicPlaceNameEn = '';
  }

  public addCity(): void {
    this.cities.push(new CityModel({
      id: 2342,
      countryId: this.country.id,
      descriptionRo: this.newCityDescriptionRo,
      descriptionEn: this.newCityDescriptionEn,
      nameEn: this.newCityNameEn,
      nameRo: this.newCityNameRo,
      destinations: this.newTouristicPlaces
    }));
    this.toggleAddCity(false);
  }

  public addTouristicPlace(): void {
    this.newTouristicPlaces.push(new DestinationModel({
      id: 2342,
      cityId: 638888,
      nameEn: this.newTouristicPlaceNameEn,
      nameRo: this.newTouristicPlaceNameRo,
      url: this.newTouristicPlaceUrl
    }));
    this.toggleTouristicPlace(false);
  }

  public get addEnabled(): boolean {
    return !!this.newCityNameRo &&
           !!this.newCityNameEn &&
           !!this.newCityDescriptionRo &&
           !!this.newCityDescriptionEn &&
           !this.addingTouristicPlace;
  }

  public get addTouristicPlaceEnabled(): boolean {
    return !!this.newTouristicPlaceNameEn &&
           !!this.newTouristicPlaceNameRo &&
           !!this.newTouristicPlaceUrl;
  }

  public show(url: string): void {
    this.visible = true;
    this.link = url;
  }

  public close(): void {
    this.visible = false;
  }
}
