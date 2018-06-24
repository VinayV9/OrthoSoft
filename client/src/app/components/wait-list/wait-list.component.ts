import { Component, OnInit } from '@angular/core';
import { User}   from '../../models/user'
import { RegisterService } from '../../services/register/register.service';
@Component({
  selector: 'app-wait-list',
  templateUrl: './wait-list.component.html',
  styleUrls: ['./wait-list.component.scss']
})
export class WaitListComponent implements OnInit {
 
  public totalCount: number;
  public currentCount: number;
  public currentUser: any;
  public value: number;
  constructor(private registerSvc: RegisterService) { }

  ngOnInit() {
      this.getList();
      this.initialize();
  }
  public waitList: any[] = [];
  /**
   * takes -1 or 1 as parameter
   * get next or prev patient details
   * on that day
   */
  allowPatient(index: number){
    switch(index){
      case -1:
        if(this.currentCount > 1){
          this.currentCount -= 1;
          this.currentUser = this.waitList[this.currentCount-1];
        }
        break;

      case 1:
        if(this.currentCount < this.totalCount){
          this.currentCount += 1;
          this.currentUser = this.waitList[this.currentCount-1];
        }
        break;
    }
    this.value = this.progressSpinner();
  }
  /**
   * calculate percentage of patients
   * completed
   */
  progressSpinner(): number{
    return (this.currentCount/this.totalCount)*100;
  }

  initialize(){
    this.currentCount= 0;
    this.value= this.progressSpinner();
  }
  getList(){
    this.registerSvc.getWaitList()
    .subscribe(
      data => {
        this.waitList = data; 
        this.currentUser = data[0];
        this.totalCount= data.length;
      },
      err => {
        console.log(err);
      });
      console.log( this.waitList);
  }
}
