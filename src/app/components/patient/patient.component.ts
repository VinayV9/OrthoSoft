import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../services/patient/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
  constructor(private patientSvc: PatientService) { }

  ngOnInit() {
  }
  patientId;
  getId(data){
    console.log(data);
    this.patientId = data;
  }
}
