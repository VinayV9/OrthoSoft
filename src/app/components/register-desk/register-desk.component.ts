import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-register-desk',
  templateUrl: './register-desk.component.html',
  styleUrls: ['./register-desk.component.scss']
})
export class RegisterDeskComponent implements OnInit {
  public patient :User = new User();
  constructor() { }
  
  ngOnInit() {
  }

}
