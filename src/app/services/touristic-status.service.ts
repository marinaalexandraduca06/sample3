import { Injectable } from '@angular/core';

import { TouristicStatusModel } from 'app/models';
import { TouristicStatus } from 'app/enums/app.enums';
import { UserService } from 'app/services';

@Injectable()
export class TouristicStatusService {
  public TouristicStatus: typeof TouristicStatus = TouristicStatus;
  public touristicStatus: TouristicStatusModel[] = [
    new TouristicStatusModel({
      id: 1,
      userId: 1,
      cityId: 1,
      status: TouristicStatus.VISITED
    }),
    new TouristicStatusModel({
      id: 1,
      userId: 1,
      cityId: 2,
      status: TouristicStatus.WISH_LIST
    })
  ];

  constructor(
    private userService: UserService
  ) {}

  public getCityStatus(cityId: number): string {
    return this.touristicStatus.find((status) => status.cityId === cityId).status;
  }

  public getVisitedCitiesIds(): number[] {
    const userId = this.userService.connectedUser._id;
    console.log(userId)
    return this.touristicStatus.filter((status) => status.userId === userId && status.status === TouristicStatus.VISITED).map((status) => status.cityId);
  }

  public getWishListCitiesIds(): number[] {
    const userId = this.userService.connectedUser._id;
    return this.touristicStatus.filter((status) => status.userId === userId && status.status === TouristicStatus.WISH_LIST).map((status) => status.cityId);
  }
}
