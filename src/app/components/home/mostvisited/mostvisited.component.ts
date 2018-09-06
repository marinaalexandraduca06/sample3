import { Component, OnInit } from '@angular/core';

import { links } from '../../../enums/app.enums';
import { DomSanitizer } from '@angular/platform-browser';

@Component ({
  selector: 'app-most-visited',
  templateUrl: './mostvisited.component.html',
  styleUrls: ['./mostvisited.component.scss']
})

export class MostvisitedComponent implements OnInit {
  visible: boolean;
  link: string;

  constructor(public sanitizer: DomSanitizer) {}

  public ngOnInit(): void {
    this.visible = false;
  }

  public show(ind: number): void {
    this.visible = true;
    this.link = links[ind];
  }

  public close(): void {
    this.visible = false;
  }
}
