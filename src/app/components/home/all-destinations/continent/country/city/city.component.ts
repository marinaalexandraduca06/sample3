import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { CityModel, DestinationModel } from 'app/models';
import { DestinationService, TranslateService, UserService, CityService } from 'app/services';
import { TouristicStatus } from 'app/enums/app.enums';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})

export class CityComponent implements OnInit {
  @Input() public city: CityModel;
  @Input() public isInEditMode: boolean;

  public destinations: DestinationModel[];
  public visible: boolean = false;
  public link = '';
  public rated: boolean = false;
  public isRo: boolean = false;
  public newCityDescriptionRo: string;
  public newCityDescriptionEn: string;
  public addingTouristicPlace: boolean = false;
  public newTouristicPlaceNameRo: string;
  public newTouristicPlaceNameEn: string;
  public newTouristicPlaceUrl: string;
  public TouristicStatus: typeof TouristicStatus = TouristicStatus;

  constructor(
    public sanitizer: DomSanitizer,
    private destinationService: DestinationService,
    private translateService: TranslateService,
    private userService: UserService,
    private cityService: CityService
  ) {}

  public async ngOnInit(): Promise<void> {
    this.newCityDescriptionRo = this.city.descriptionRo;
    this.newCityDescriptionEn = this.city.descriptionEn;
    this.translateService.isRo.subscribe(async (isRo) => {
      this.isRo = isRo;
      this.destinations = await this.destinationService.getDestinations(this.city._id, this.isRo);
    });
  }

  public show(url: string): void {
    this.visible = true;
    this.link = url;
  }

  public close(): void {
    this.visible = false;
  }

  public toggleTouristicPlace(open: boolean): void {
    this.addingTouristicPlace = open;
    this.newTouristicPlaceUrl = '';
    this.newTouristicPlaceNameRo = '';
    this.newTouristicPlaceNameEn = '';
  }

  public async addTouristicPlace(): Promise<void> {
    const newDestination = await this.destinationService.create(new DestinationModel({
      cityId: this.city._id,
      nameEn: this.newTouristicPlaceNameEn,
      nameRo: this.newTouristicPlaceNameRo,
      url: this.newTouristicPlaceUrl
    }));
    this.destinations.push(newDestination);
    this.city.destinations = this.destinations.slice();
    await this.cityService.update(this.city);
    this.toggleTouristicPlace(false);
  }

  public get addTouristicPlaceEnabled(): boolean {
    return !!this.newTouristicPlaceNameEn &&
           !!this.newTouristicPlaceNameRo &&
           !!this.newTouristicPlaceUrl;
  }

  public get saveDescriptionEnabled(): boolean {
    return this.isRo ?
      ( this.newCityDescriptionRo.replace(/\s/g, '') !== '' && this.newCityDescriptionRo && this.city.descriptionRo !== this.newCityDescriptionRo)
      : ( this.newCityDescriptionEn.replace(/\s/g, '') !== '' && this.newCityDescriptionEn && this.city.descriptionEn !== this.newCityDescriptionEn);
  }

  public markAsVisited(): void {
    this.city.status = TouristicStatus.VISITED;
  }

  public addToWishlist(): void {
    this.city.status = TouristicStatus.WISH_LIST;
  }

  public addCityToBacklog(): void {
    this.city.status = TouristicStatus.BACKLOG;
  }

  public async saveNewDescription(): Promise<void> {
    if (this.isRo) {
      this.city.descriptionRo = this.newCityDescriptionRo;
    } else {
      this.city.descriptionEn = this.newCityDescriptionEn;
    }
    await this.cityService.update(this.city);
  }
}
