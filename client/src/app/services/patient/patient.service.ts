import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  
  constructor(private http: HttpClient) { }
  
  /**
   * get all ids with user data for
   * search box
   */
  getAllIds(){
    return this.http.get<any[]>('', httpOptions);
  }

  getDetailsById(id: string){
     return this.http.get<any>('', httpOptions);
  }
  
}
