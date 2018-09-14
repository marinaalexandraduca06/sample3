export class ContinentModel {
  public _id: string;
  public nameRo: string;
  public nameEn: string;

  public toggled: boolean = false;
  public arrowImgPath: string = '../../../assets/img/arrow-down.jpg';

  constructor(fields: {
    _id?: string,
    nameRo: string,
    nameEn: string
  }) {
    if (fields) {
      this._id = fields._id;
      this.nameEn = fields.nameEn;
      this.nameRo = fields.nameRo;
    }
  }

  public toggle(): void {
    this.toggled = !this.toggled;
    this.arrowImgPath = this.toggled ? '../../../assets/img/arrow-up.jpg' : '../../../assets/img/arrow-down.jpg';
  }
}
