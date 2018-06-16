import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MaterialdesignModule } from './modules/material-design/material-design.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { SkeletonComponent } from './components/skeleton/skeleton.component';
import { DisplayPartsComponent } from './components/display-parts/display-parts.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { PatientComponent } from './components/patient/patient.component';


import { PatientService } from './services/patient/patient.service';
import { SkeletonService } from './services/skeleton/skeleton.service';
import { PatientSearchComponent } from './components/patient/patient-search/patient-search.component';
import { PatientSkeletonComponent } from './components/patient/patient-skeleton/patient-skeleton.component';
import { WaitListComponent } from './components/wait-list/wait-list.component';
import { RegisterDeskComponent } from './components/register-desk/register-desk.component';


@NgModule({
  declarations: [
    AppComponent,
    SkeletonComponent,
    DisplayPartsComponent,
    SideNavComponent,
    PatientComponent,
    PatientSearchComponent,
    PatientSkeletonComponent,
    WaitListComponent,
    RegisterDeskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialdesignModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [
    PatientService,
    SkeletonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
