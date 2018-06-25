import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../services/patient/patient.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
  public id:any;
  protected Sub: any;
  public details: any;
  constructor(private patientSvc: PatientService,private activatedRoute: ActivatedRoute) { }
  
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.patientSvc.getDetailsById(this.id)
    .subscribe(
      data => this.details = data,
      err => console.log(err)
    );
  }
  
}
