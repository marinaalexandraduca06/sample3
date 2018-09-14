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

  public async ngOnInit(): Promise<void> {
    this.translateService.isRo.subscribe(async (isRo) => {
      this.isRo = isRo;
      this.countries = await this.countryService.getCountries(this.continent._id, this.isRo);
    });
  }

  public toggleAddCountry(open: boolean): void {
    this.addingCountry = open;
    this.newCountryNameEn = '';
    this.newCountryNameRo = '';
  }

  public async addCountry(): Promise<void> {
    const country = await this.countryService.create(new CountryModel({
      continentId: this.continent._id,
      nameEn: this.newCountryNameEn,
      nameRo: this.newCountryNameRo
    }));
    this.countries.push(country);
    this.toggleAddCountry(false);
  }

  public get addEnabled(): boolean {
    return !!this.newCountryNameRo && !!this.newCountryNameEn;
  }
}
