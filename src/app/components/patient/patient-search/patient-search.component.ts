import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { startWith } from 'rxjs/operators/startWith';
import { FormControl, FormGroup, FormBuilder, FormGroupDirective, NgForm, Validators, Form } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { PatientService } from '../../../services/patient/patient.service';

@Component({
  selector: 'app-patient-search',
  templateUrl: './patient-search.component.html',
  styleUrls: ['./patient-search.component.scss']
})
export class PatientSearchComponent implements OnInit {

  form: FormGroup;
  filteredIds: any[];
  ids: any[];

  @Output() idSelected = new EventEmitter<number>();

  constructor(private _searchId: PatientService,
    private fb: FormBuilder) {
    this.filteredIds = [];
    this.form = fb.group({
      patientId: ['']
    });
  }

  ngOnInit() {

    console.log(this.form);

    this._searchId.getAllIds().subscribe(res => {
      console.log(res);
      this.ids = res;
    });

    this.form.get("patientId").valueChanges.subscribe(val => {
      this.filteredIds = [];
      if (val && val.length > 2) {
        this.filteredIds =
          this.ids.filter(x => x.id.toLowerCase().indexOf(val.toLowerCase()) >= 0);
      }
    });
  }

  displayFn(f ?: any): string | undefined {
    return f ? f.id : null;
  }

  makeSelection(f) {
    this.idSelected.emit(f.id);
  }

}
