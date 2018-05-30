import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { AbstractControl } from '@angular/forms/src/model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  idSearchUrl: string = 'assets/json/ids.json';
  p: string = 'assets/json/checkup.json';
  constructor(private http: HttpClient) { }
  
  getAllIds(){
    return this.http.get<any[]>(this.idSearchUrl, httpOptions);
  }

  getDetails(id: string){
     return this.http.get<any>(this.p, httpOptions);
  }
  
}
