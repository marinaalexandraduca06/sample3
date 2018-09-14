import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { destinations } from '../../../enums/destinations';
import { ContinentModel } from 'app/models';
import { ContinentService, UserService, TranslateService } from 'app/services';

@Component({
  selector: 'app-map',
  templateUrl: './all-destinations.component.html',
  styleUrls: ['./all-destinations.component.scss']
})

export class AllDestinationsComponent implements OnInit {
  public selected: number;
  public hovered: number;
  public isRo: boolean = false;
  public isInEditMode: boolean = false;
  private continents: ContinentModel[];
  private destinations: any = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private continentService: ContinentService,
    private userService: UserService,
    private router: Router,
    private translateService: TranslateService
  ) {
    this.destinations = destinations;
  }

  public async ngOnInit(): Promise<void> {
    if (this.activatedRoute.snapshot.url[0].path === 'edit-destinations' && this.userService.hasEditingRights) {
      this.isInEditMode = true;
    } else if (!this.userService.hasEditingRights) {
      this.router.navigateByUrl('home');
    }
    this.translateService.isRo.subscribe(async (isRo) => {
      this.isRo = isRo;
      this.continents = await this.continentService.getContinents(this.isRo);
    });
  }
}
