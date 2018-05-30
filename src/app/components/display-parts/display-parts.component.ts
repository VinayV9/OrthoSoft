import { Component, OnInit, Input } from '@angular/core';
import { Patient } from '../../models/patient';
import { unusedValueExportToPlacateAjd } from '@angular/core/src/render3/interfaces/query';

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
  @Input() public ids: number[] = [];
  
  patient: Patient = new Patient();
  protected submit(){
     this.patient.partIds = this.ids; 
    //  TODO: make post req
     console.log(this.patient);
     this.patient.medicines = '';
     this.patient.id = undefined;
  }
}
