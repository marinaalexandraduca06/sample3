import { Injectable } from '@angular/core';

import { SuggestionModel } from 'app/models';
import { SuggestionsStatus } from 'app/enums/app.enums';

@Injectable()
export class SuggestionService {
  public getSuggestions(): SuggestionModel[] {
    const suggestions: SuggestionModel[] = [];
    // suggestions.push(new SuggestionModel({
    //   id: 1,
    //   suggestion: 'Suggestion 1',
    //   status: SuggestionsStatus.IN_PROGGRESS
    // }));
    // suggestions.push(new SuggestionModel({
    //   id: 2,
    //   suggestion: 'Suggestion 2',
    //   status: SuggestionsStatus.APPROVED
    // }));
    // suggestions.push(new SuggestionModel({
    //   id: 3,
    //   suggestion: 'Suggestion 3',
    //   status: SuggestionsStatus.IN_PROGGRESS
    // }));
    // suggestions.push(new SuggestionModel({
    //   id: 4,
    //   suggestion: 'Suggestion 4',
    //   status: SuggestionsStatus.IN_PROGGRESS
    // }));
    // suggestions.push(new SuggestionModel({
    //   id: 5,
    //   suggestion: 'Suggestion 5',
    //   status: SuggestionsStatus.REJECTED
    // }));
    return suggestions;
  }
}
