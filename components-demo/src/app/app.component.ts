import { Component, Output } from '@angular/core';
import {ClickedObjPassing} from "./favorite/favorite.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imgURL = "https://picsum.photos/525/200";
  test: Boolean = false;
  title = "Reusable Components"
  tweet = {
    body: "Grandma's Apple Pie!",
    likes: 10,
    isLiked: false
  }
  courses = [1, 2];
  

  onFavoriteChanged(passedArgs:ClickedObjPassing){

    console.log(passedArgs.boolValue);
  }

}
