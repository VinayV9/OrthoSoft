import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: any = {};
  constructor(
    private loginSvc: AuthService,
    private router: Router
  ) { }
  
  ngOnInit() {
  }
  hide = true;
  login(){
    this.loginSvc.login(this.user)
    .subscribe(
        data => {
          localStorage.setItem('token', data.token);
          this.router.navigate(['/']);
        },
        error => {
          //TODO: alert service
          console.log('err: ',error);
        }
  );  
  }
}
