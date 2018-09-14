export class TouristicStatusModel {
  public _id: string;
  public userId: string;
  public cityId: string;
  public status: string;

  constructor(fields: {
    _id?: string,
    userId: string,
    cityId: string,
    status: string
  }) {
    if (fields) {
      this._id = fields._id;
      this.userId = fields.userId;
      this.cityId = fields.cityId;
      this.status = fields.status;
    }
  }
}
