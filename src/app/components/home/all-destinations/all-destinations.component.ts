import { Component } from '@angular/core';
import { destinations } from '../../../enums/destinations';

@Component({
  selector: 'app-map',
  templateUrl: './all-destinations.component.html',
  styleUrls: ['./all-destinations.component.scss']
})

export class AllDestinationsComponent {
  private continents: any = [
    {
      name: 'Africa',
      display: 'false',
      arrowImgPath: '../../../assets/arrow-down.jpg'
    },
    {
      name: 'Antarctica',
      display: 'false',
      arrowImgPath: '../../../assets/arrow-down.jpg'
    },
    {
      name: 'Asia',
      display: 'false',
      arrowImgPath: '../../../assets/arrow-down.jpg'
    },
    {
      name: 'Europe',
      display: 'false',
      arrowImgPath: '../../../assets/arrow-down.jpg'
    },
    {
      name: 'North America',
      display: 'false',
      arrowImgPath: '../../../assets/arrow-down.jpg'
    },
    {
      name: 'South America',
      display: 'false',
      arrowImgPath: '../../../assets/arrow-down.jpg'
    }
  ];

  private countries: any = {
    'Europe': [
      'Franta',
      'Marea Britanie'
    ]
  };

  private cities: any = {
    'Franta': [
      'Paris'
    ],
    'Marea Britanie': [
      'Londra'
    ]
  };

  private destinations: any = [];

  constructor() {
    this.destinations = destinations;
    console.log(this.destinations);
  }

  public toggleElement(element: string, elementType: string): void {
    switch (elementType) {
      case 'continent': {
        if (this.continents[element].display === 'true') {
          this.continents[element].display = 'false';
          this.continents[element].arrowImgPath = '../../../assets/arrow-down.jpg';
          break;
        } else {
          this.continents[element].display = 'true';
          this.continents[element].arrowImgPath = '../../../assets/arrow-up.jpg';
          break;
        }
      }
    }
  }
}
