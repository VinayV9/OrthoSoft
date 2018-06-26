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
    private authSvc: AuthService,
    private router: Router
  ) { }
  
  ngOnInit() {
  }
  hide = true;
  login(){
    this.authSvc.login(this.user)
    .subscribe(
        data => {
          localStorage.setItem('token', data.token);
          this.router.navigate(['/']);
          this.authSvc.getProfile(data);
        },
        error => {
          //TODO: alert service
          console.log('err: ',error);
        }
  );  
  }
}
