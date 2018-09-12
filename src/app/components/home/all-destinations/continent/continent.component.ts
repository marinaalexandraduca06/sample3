import { Component, OnInit, Input } from '@angular/core';

import { ContinentModel, CountryModel } from 'app/models';
import { CountryService, TranslateService } from 'app/services';

@Component({
  selector: 'app-continent',
  templateUrl: './continent.component.html',
  styleUrls: ['./continent.component.scss']
})

export class ContinentComponent implements OnInit {
  @Input() public continent: ContinentModel;
  @Input() public isInEditMode: boolean;

  public countries: CountryModel[];
  public isRo: boolean = false;
  public addingCountry: boolean = false;
  public newCountryNameRo: string;
  public newCountryNameEn: string;

  constructor(
    private countryService: CountryService,
    private translateService: TranslateService
  ) {}

  public ngOnInit(): void {
    this.translateService.isRo.subscribe((isRo) => this.isRo = isRo);
    this.countries = this.countryService.getCountries(this.continent.id);
  }

  public toggleAddCountry(open: boolean): void {
    this.addingCountry = open;
    this.newCountryNameEn = '';
    this.newCountryNameRo = '';
  }

  public addCountry(): void {
    this.countries.push(new CountryModel({
      id: 2342,
      continentId: this.continent.id,
      nameEn: this.newCountryNameEn,
      nameRo: this.newCountryNameRo
    }));
    this.toggleAddCountry(false);
  }

  public get addEnabled(): boolean {
    return !!this.newCountryNameRo && !!this.newCountryNameEn;
  }
}
