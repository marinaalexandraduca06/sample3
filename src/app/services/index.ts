import { UtilsService } from './utils.service';
import { UserService } from './user.service';
import { TranslateService } from './translate.service';
import { ContinentService } from './continent.service';
import { CountryService } from './country.service';
import { CityService } from './city.service';
import { DestinationService } from './destination.service';
import { SuggestionService } from './suggestions.service';
import { TouristicStatusService } from './touristic-status.service';

export const SERVICES = [
  UtilsService,
  UserService,
  TranslateService,
  ContinentService,
  CountryService,
  CityService,
  DestinationService,
  SuggestionService,
  TouristicStatusService
];

export {
  UtilsService,
  UserService,
  TranslateService,
  ContinentService,
  CountryService,
  CityService,
  DestinationService,
  SuggestionService,
  TouristicStatusService
};
