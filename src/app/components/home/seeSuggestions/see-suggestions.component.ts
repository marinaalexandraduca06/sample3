import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SuggestionModel } from 'app/models';
import { SuggestionService, UserService } from 'app/services';
import { SuggestionsStatus } from 'app/enums/app.enums';

@Component({
  selector: 'app-see-suggestions',
  templateUrl: './see-suggestions.component.html',
  styleUrls: ['./see-suggestions.component.scss']
})

export class SeeSuggestionsComponent implements OnInit {
  public suggestions: SuggestionModel[];
  public SuggestionStatus: typeof SuggestionsStatus = SuggestionsStatus;

  constructor(
    public userService: UserService,
    private suggestionService: SuggestionService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    if (!this.userService.hasEditingRights) {
      this.router.navigateByUrl('home');
    }
    this.suggestions = this.suggestionService.getSuggestions();
  }
}
