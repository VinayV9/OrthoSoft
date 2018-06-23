import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { SkeletonService } from '../../services/skeleton/skeleton.service';
import { Skeleton , skeletonData} from '../../models/skeleton';


@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss']
})
export class SkeletonComponent implements OnInit {
  @Input() public part: string;
  @ViewChild('canvas') canvas: ElementRef;

  constructor(private skeletonSvc : SkeletonService) { }

  ngOnInit() {}
  
   parts: string[] = [];
   items: Skeleton[] = skeletonData;
   ids: number[] = [];

// events on skeleton
  event(eventName: string, item: Skeleton) {
    switch (eventName) {
      case "click":
        this.toogle(item.partId-1);
        this.skeletonSvc.clearCanvas(this.items, this.canvas);
        break;
      case "mouseenter":
        this.skeletonSvc.drawCanvas(item.coords.split(' ').map(Number), this.canvas, item.color);
        break;
      case "mouseleave":
        this.skeletonSvc.clearCanvas(this.items, this.canvas);
        break;
    }
  }
  
// unselect or select a part
  toogle(index){
   this.items[index].select = !this.items[index].select;
   const part = this.items[index].name;
   this.items[index].select === true ? this.parts.push(part): this.parts.splice(this.parts.indexOf(part), 1) ;
   this.items[index].select === true ? this.ids.push(index+1): this.parts.splice(this.ids.indexOf(index+1), 1) ;
  }

}
