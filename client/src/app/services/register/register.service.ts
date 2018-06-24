import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }
  // save user details in db
  user(data : any){
    return this.http.post<any>('/patients/register', data, httpOptions);
  }
  // save user visit details in db
  visit(data : any){
    return this.http.post<any>('/patients/visit', data, httpOptions);
  }
}
