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
        this.skeletonSvc.drawCanvas(item.coords.split(' ').map(Number), this.canvas, item.color);
        this.parts.push(item.name);
        break;

      case "mouseenter":
        this.skeletonSvc.drawCanvas(item.coords.split(' ').map(Number), this.canvas, item.color);
        break;

      case "mouseleave":
        this.skeletonSvc.drawCanvas(item.coords.split(' ').map(Number), this.canvas, "rgba(0, 0, 0, 0)");
        this.skeletonSvc.clearCanvas(item.coords.split(' ').map(Number), this.canvas);
        break;
    }
  }

}
