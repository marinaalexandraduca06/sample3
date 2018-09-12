export class SuggestionModel {
  public id: number;
  public suggestion: string;
  public status: string;

  constructor(fields: {
    id: number,
    suggestion: string,
    status: string
  }) {
    if (fields) {
      this.id = fields.id;
      this.suggestion = fields.suggestion;
      this.status = fields.status;
    }
  }

  public get statusKey(): string {
    return 'suggestions_status.' + this.status;
  }
}
