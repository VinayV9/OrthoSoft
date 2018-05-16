import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss']
})
export class SkeletonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  clicked: string = '';

  displayPart(partId: number, position: number){
    console.log(partId,position);
    if( this.clicked === ''){
      this.clicked = 'demo'+partId;
    }else{
      this.clicked = '';
    }

  }
  

}
