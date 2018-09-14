import { DestinationModel } from 'app/models';

export class CityModel {
  public _id: string;
  public countryId: string;
  public nameRo: string;
  public nameEn: string;
  public descriptionRo: string;
  public descriptionEn: string;
  public rating: number;
  public nrOfRatings: number;
  public nrOfVisitors: number;
  public destinations: DestinationModel[];

  public toggled: boolean = false;
  public arrowImgPath: string = '../../../../../assets/img/arrow-down.jpg';
  public status: string;

  constructor(fields?: {
    _id?: string,
    countryId: string,
    nameRo: string,
    nameEn: string,
    descriptionRo: string,
    descriptionEn: string,
    rating?: number,
    nrOfRatings?: number,
    nrOfVisitors?: number,
    destinations: DestinationModel[],
    status?: string
  }) {
    if (fields) {
      this._id = fields._id;
      this.countryId = fields.countryId;
      this.nameEn = fields.nameEn;
      this.nameRo = fields.nameRo;
      this.descriptionRo = fields.descriptionRo;
      this.descriptionEn = fields.descriptionEn;
      this.rating = fields.rating ? fields.rating : 0;
      this.nrOfRatings = fields.nrOfRatings ? fields.nrOfRatings : 0;
      this.nrOfVisitors = fields.nrOfVisitors ? fields.nrOfVisitors : 0;
      this.destinations = fields.destinations ? fields.destinations.map((destination) => new DestinationModel(destination)) : [];
      this.status = fields.status;
    } else {
      this._id = undefined;
      this.countryId = undefined;
      this.nameEn = '';
      this.nameRo = '';
      this.descriptionRo = '';
      this.descriptionEn = '';
      this.rating = 0;
      this.nrOfRatings = 0;
      this.nrOfVisitors = 0;
      this.destinations = [];
      this.status = undefined;
    }
  }

  public toggle(): void {
    this.toggled = !this.toggled;
    this.arrowImgPath = this.toggled ? '../../../../../assets/img/arrow-up.jpg' : '../../../../../assets/img/arrow-down.jpg';
  }
}
