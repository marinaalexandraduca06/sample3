export class TouristicStatusModel {
  public id: number;
  public userId: number;
  public cityId: number;
  public status: string;

  constructor(fields: {
    id: number,
    userId: number,
    cityId: number,
    status: string
  }) {
    if (fields) {
      this.id = fields.id;
      this.userId = fields.userId;
      this.cityId = fields.cityId;
      this.status = fields.status;
    }
  }
}
