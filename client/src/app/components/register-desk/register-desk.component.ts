import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { RegisterService } from '../../services/register/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-desk',
  templateUrl: './register-desk.component.html',
  styleUrls: ['./register-desk.component.scss']
})
export class RegisterDeskComponent implements OnInit {
  public patient :User = new User();
  constructor(
    private registerSvc: RegisterService,
    private router: Router
  ) { }
  
  ngOnInit() {
  }
  /**
   * takes patient details 
   * saves in db
   */
  registerUser(){
      this.registerSvc.user(this.patient)
      .subscribe(
        data => this.router.navigate(['vist']),
        err => console.log(err)
      );
  }
}
