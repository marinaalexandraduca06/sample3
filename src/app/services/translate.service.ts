import { Injectable } from "@angular/core";
import { LANG_EN } from "../enums/lang-en";
import { LANG_RO } from "../enums/lang-ro";


@Injectable()
export class TranslateService {
	public language: string;
	public translations: any = {};

	constructor() {
		if (localStorage.getItem("siteLanguage")) {
			this.setTranslationLanguage(localStorage.getItem("siteLanguage"));
		} else {
			this.translations = LANG_EN;
		}
	}

	public setTranslationLanguage(language: string): void {
		switch(language) {
			case 'en': {
				this.translations = LANG_EN;
				localStorage.setItem("siteLanguage", "en");
				break;
			}
			case "ro": {
				this.translations = LANG_RO;
				localStorage.setItem("siteLanguage", "ro");
				break;
			}
		}
	}

	public getTranslation(key: string): string {
		return this.translations[key];
	}
}
