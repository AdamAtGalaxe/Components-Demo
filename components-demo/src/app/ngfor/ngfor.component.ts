import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent {
  courses = [];

  onAdd(){
    let count = this.courses[this.courses.length-1].id +1
    this.courses.push(
      {
        id:count,
        name:"course " + count
      }
    )
  }
  onRemove(course){
    let index=this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }
  onChange(course){
    course.name = "Updated";
  }
  onLoad(){
    this.courses = [
      {id:1, name: 'course 1'},
      {id:2, name: 'course 2'},
      {id:3, name: 'course 3'},
      {id:4, name: 'course 4'}
  ];
  }
  trackCourse(index, course){
    course ? course.id : undefined;
  }
}
