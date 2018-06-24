import { Component, OnInit } from '@angular/core';
import { Visit } from '../../models/user';
import { RegisterService } from '../../services/register/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vist',
  templateUrl: './vist.component.html',
  styleUrls: ['./vist.component.scss']
})
export class VistComponent implements OnInit {
  public visit: Visit = new Visit();
  constructor(
    private registerSvc: RegisterService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  /**
   * when a patient comes for a visit
   * register desk takes the problem description
   */
  registerVisit(){
     this.registerSvc.visit(this.visit)
     .subscribe(
        data => this.router.navigate(['/']),
        error => console.log('err: ',error)
      );
  }

}
