import { Injectable, ElementRef } from '@angular/core';
import { Skeleton } from '../../models/skeleton';

@Injectable({
  providedIn: 'root'
})
export class SkeletonService {

  constructor() { }



  drawCanvas(coords: number[], canvas: ElementRef, color: string){

    let ctx: CanvasRenderingContext2D = canvas.nativeElement.getContext('2d');
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(coords[0], coords[1]);
    for(let item = 2; item < coords.length-1; item += 2 ){
       ctx.lineTo( coords[item] , coords[item+1] )
    }
    ctx.closePath();
    ctx.fill();
  }

  clearCanvas(items: Skeleton[], canvas: ElementRef){
    let ctx: CanvasRenderingContext2D = canvas.nativeElement.getContext('2d');
    ctx.clearRect(0, 0, 560, 900);
    items.filter( (item)=>{
        if(item.select === true){
          this.drawCanvas(item.coords.split(' ').map(Number), canvas, item.color);
        }
    });

  }
}
