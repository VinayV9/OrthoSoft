import { Component, OnInit } from '@angular/core';
import { waitList, User }   from '../../models/user'
@Component({
  selector: 'app-wait-list',
  templateUrl: './wait-list.component.html',
  styleUrls: ['./wait-list.component.scss']
})
export class WaitListComponent implements OnInit {
  public totalCount: number = waitList.length;
  public currentCount: number = 1;
  public currentUser: User = waitList[0];
  public value: number = (this.currentCount/this.totalCount)*100;
  constructor() { }

  ngOnInit() {
  }
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
          this.currentUser = waitList[this.currentCount-1];
        }
        break;

      case 1:
        if(this.currentCount < this.totalCount){
          this.currentCount += 1;
          this.currentUser = waitList[this.currentCount-1];
        }
        break;
    }
    this.progressSpinner();
  }
  /**
   * calculate percentage of patients
   * completed
   */
  progressSpinner(){
    this.value= (this.currentCount/this.totalCount)*100;
  }

}
