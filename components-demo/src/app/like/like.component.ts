import { Component, Input, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { faHeart } from '@fortawesome/free-solid-svg-icons';  
import { faHeartBroken } from '@fortawesome/free-solid-svg-icons';  

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  faHeart = faHeart;   
  @Input("likesCount") likesCount: number;
  @Input("isActive") isActive: boolean;

  onClick(){
    this.isActive = !this.isActive;
    this.likesCount += (this.isActive) ? 1 : -1;
  }

}
