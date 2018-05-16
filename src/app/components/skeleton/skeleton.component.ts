import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss']
})
export class SkeletonComponent implements OnInit {
  @Input() public part: string;

  constructor() { }

  ngOnInit() {
  }

  parts: string[] = [];

  displayPart(part: string, position: number){
    if(position === 1){
      part = "right "+part;
    }else if(position === -1){
      part = "left "+part;
    }
    this.parts.push(part);
  }
  

}
