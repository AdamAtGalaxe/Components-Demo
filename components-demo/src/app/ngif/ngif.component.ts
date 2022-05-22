import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent{
  tweet = {
    body: "Grandma's Apple Pie!",
    likes: 10,
    isLiked: false
  }
  courses = [1, 2];
}
