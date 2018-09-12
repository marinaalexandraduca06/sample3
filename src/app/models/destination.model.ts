export class DestinationModel {
  public id: number;
  public cityId: number;
  public nameRo: string;
  public nameEn: string;
  public url: string;

  constructor(fields: {
    id: number,
    cityId: number,
    nameRo: string,
    nameEn: string,
    url: string
  }) {
    if (fields) {
      this.id = fields.id;
      this.cityId = fields.cityId;
      this.nameEn = fields.nameEn;
      this.nameRo = fields.nameRo;
      this.url = fields.url;
    }
  }
}
