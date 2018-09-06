import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

@Component ({
  selector: 'app-suggest',
  templateUrl: './suggest.component.html',
  styleUrls: ['./suggest.component.scss']
})
export class SuggestComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  send(): void {
    this.router.navigate(['']);
  }
}
