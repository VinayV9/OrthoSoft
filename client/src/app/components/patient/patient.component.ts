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

  constructor(private patientSvc: PatientService,private activatedRoute: ActivatedRoute) { }
  
  ngOnInit() {
    // this.id = this.activatedRoute.snapshot.params.id;
    // console.log(this.id);
    this.Sub = this.activatedRoute.params.subscribe(params => {this.id = params['id']; console.log(params['id']);});
  }
  
  ngOnDestroy() {
    this.Sub.unsubscribe();
  }
  
}
