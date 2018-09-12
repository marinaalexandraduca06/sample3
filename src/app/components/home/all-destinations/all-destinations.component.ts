import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { destinations } from '../../../enums/destinations';
import { ContinentModel } from 'app/models';
import { ContinentService, UserService } from 'app/services';

@Component({
  selector: 'app-map',
  templateUrl: './all-destinations.component.html',
  styleUrls: ['./all-destinations.component.scss']
})

export class AllDestinationsComponent implements OnInit {
  public selected: number;
  public hovered: number;
  public isInEditMode: boolean = false;
  private continents: ContinentModel[];
  private destinations: any = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private continentService: ContinentService,
    private userService: UserService,
    private router: Router
  ) {
    this.destinations = destinations;
  }

  public async ngOnInit(): Promise<void> {
    if (this.activatedRoute.snapshot.url[0].path === 'edit-destinations' && this.userService.hasEditingRights) {
      this.isInEditMode = true;
    } else if (!this.userService.hasEditingRights) {
      this.router.navigateByUrl('home');
    }
    this.continents = await this.continentService.getContinents().toPromise();
    // const serverResp = await this.continentService.getContinents().toPromise();
    // this.continents = serverResp.result.docs.map((continent) => new ContinentModel(continent));
  }
}
