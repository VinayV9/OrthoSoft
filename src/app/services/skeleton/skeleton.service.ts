import { Injectable, ElementRef } from '@angular/core';

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
   // ctx.globalCompositeOperation = 'destination-out';
  }

  clearCanvas(coords: number[], canvas: ElementRef){
    let ctx: CanvasRenderingContext2D = canvas.nativeElement.getContext('2d');
    ctx.clearRect(0, 0, 560, 900);
  }
}
