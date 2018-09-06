import { Component, Input, Output, EventEmitter } from '@angular/core';

import { IDropdownItem } from '../../../app.interfaces';

@Component({
  selector: 'dropdown',
  templateUrl: 'dropdown.component.html',
  styleUrls: ['dropdown.component.css']
})
export class DropdownComponent {
  @Input() public dropdownHeader: string;
  @Input() public dropdownContent: IDropdownItem[];
  @Input() public selectedItem: IDropdownItem;

  @Output() public selectedItemChanged: EventEmitter<IDropdownItem> = new EventEmitter();

  public displayDropdownBody: boolean = false;
  public arrowImgPath: string = '../../../assets/arrow-down.jpg';

  private toggleDropdownBody(): void {
    if (this.displayDropdownBody) {
      this.displayDropdownBody = false;
      this.arrowImgPath = '../../../assets/arrow-down.jpg';
    } else {
      this.displayDropdownBody = true;
      this.arrowImgPath = '../../../assets/arrow-up.jpg';
    }
  }

  public selectItem(item: IDropdownItem): void {
    this.selectedItem = item;
    this.displayDropdownBody = false;
    this.arrowImgPath = '../../../assets/arrow-down.jpg';
    this.selectedItemChanged.emit(item);
  }
}
