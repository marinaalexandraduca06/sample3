import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '../services/translate.service';

@Pipe({
	name: 'translate',
	pure: false
})
export class TranslatePipe implements PipeTransform {
	constructor(private translateService: TranslateService) {}
	public transform(key: string): string {
		const translation = this.translateService.getTranslation(key);
		return translation;
	}
}