import { Component, OnInit } from '@angular/core';
import { Visit } from '../../models/user';

@Component({
  selector: 'app-vist',
  templateUrl: './vist.component.html',
  styleUrls: ['./vist.component.scss']
})
export class VistComponent implements OnInit {
  public visit: Visit = new Visit();
  constructor() { }

  ngOnInit() {
  }
  /**
   * when a patient comes for a visit
   * register desk takes the problem description
   */
  registerVisit(){
     console.log(this.visit);
  }

}
