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

  constructor(private http: HttpClient) { }
  
  getAllIds(){
    return this.http.get<any[]>(this.idSearchUrl, httpOptions);
  }
}
