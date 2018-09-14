export class SuggestionModel {
  public _id: string;
  public suggestion: string;
  public status: string;

  constructor(fields: {
    _id?: string,
    suggestion: string,
    status: string
  }) {
    if (fields) {
      this._id = fields._id;
      this.suggestion = fields.suggestion;
      this.status = fields.status;
    }
  }

  public get statusKey(): string {
    return 'suggestions_status.' + this.status;
  }
}
