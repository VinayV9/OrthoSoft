import { Component, OnInit, ViewChild, ElementRef, Input} from '@angular/core';
import { skeletonData, Skeleton } from '../../../models/skeleton';
import { SkeletonService } from '../../../services/skeleton/skeleton.service';
import { Patient } from '../../../models/patient';
import { PatientService } from '../../../services/patient/patient.service';

@Component({
  selector: 'app-patient-skeleton',
  templateUrl: './patient-skeleton.component.html',
  styleUrls: ['./patient-skeleton.component.scss']
})
export class PatientSkeletonComponent implements OnInit {
  @ViewChild('canvas') canvas: ElementRef;
  @Input() id: string;

   details: Patient = new Patient();
   items: Skeleton[] = skeletonData;
   parts: any[];

  constructor(
    private skeletonSvc: SkeletonService,
    private patientSvc: PatientService
  ) { }
 
  ngOnInit() {
    this.getAoFractureDetails();
  }
  
  getAoFractureDetails(){
    this.id='1234';
    this.patientSvc.getDetails(this.id).subscribe(res => {
      this.details = res.filter((p)=>{
        if(p.id == this.id){
          this.modifySkeleton(p.partIds);
          return p;
        }
      })[0];
      console.log(this.details);
    });
  }

  modifySkeleton(partIds: number[]){
    console.log(partIds);
     partIds.forEach( idx => {
       this.items[idx-1].select = !this.items[idx-1].select;
     });
     this.skeletonSvc.clearCanvas(this.items, this.canvas);
  }


}
