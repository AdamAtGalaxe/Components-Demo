import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent{
  @Input("boolResults") isSelected: Boolean;
  @Output("change") changeEvent = new EventEmitter();

  onClick() {
    this.isSelected = !this.isSelected;
    this.changeEvent.emit({boolValue: !this.isSelected});
  }


}

export interface ClickedObjPassing {
  boolValue: boolean;
}