import { Injectable } from "@angular/core";

@Injectable()
export class RegistrationService {
	public fields: string[];
	public title: string;

	public setFields(fields: string[], title: string): void {
		fields.forEach((field: string) => { this.fields.push(field) });
		this.title = title;
	}

	public getFields(): string[] {
		return this.fields;
	}

	public getTitle(): string {
		return this.title;
	}
}