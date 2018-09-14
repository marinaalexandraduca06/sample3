export class DestinationModel {
  public _id: string;
  public cityId: string;
  public nameRo: string;
  public nameEn: string;
  public url: string;

  constructor(fields?: {
    _id?: string,
    cityId: string,
    nameRo: string,
    nameEn: string,
    url: string
  }) {
    if (fields) {
      this._id = fields._id;
      this.cityId = fields.cityId;
      this.nameEn = fields.nameEn;
      this.nameRo = fields.nameRo;
      this.url = fields.url;
    } else {
      this._id = undefined;
      this.cityId = undefined;
      this.nameEn = '';
      this.nameRo = '';
      this.url = '';
    }
  }
}
