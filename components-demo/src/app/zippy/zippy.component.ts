import { Component, Input, OnInit } from '@angular/core';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';  
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';  

@Component({


  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {
  chevUp=faChevronUp 
  @Input('title') title: string;
  isExpanded: boolean;

  toggle(){
    this.isExpanded = !this.isExpanded 
    if (this.chevUp==faChevronUp ) this.chevUp=faChevronDown
    else this.chevUp=faChevronUp 
  }

}
