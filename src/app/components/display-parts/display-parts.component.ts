import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-parts',
  templateUrl: './display-parts.component.html',
  styleUrls: ['./display-parts.component.scss']
})
export class DisplayPartsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() public parts: string[] = [];

}
