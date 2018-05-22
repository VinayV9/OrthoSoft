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

  toogle(index){
   this.items[index].select = !this.items[index].select;
   this.items[index].select === true ? this.parts.push(this.items[index].name): this.parts.splice(this.parts.indexOf(this.items[index].name), 1) ;
  }

}
