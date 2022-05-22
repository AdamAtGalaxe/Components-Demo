import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-save-traversal',
  templateUrl: './save-traversal.component.html',
  styleUrls: ['./save-traversal.component.css']
})
export class SaveTraversalComponent {
task = {
  title: 'Review applications',
  assignee: {
    name: "adam roberts"
  }
}

}
