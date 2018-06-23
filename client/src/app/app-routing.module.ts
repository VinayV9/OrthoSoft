import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkeletonComponent } from './components/skeleton/skeleton.component';
import { PatientComponent } from './components/patient/patient.component';
import { WaitListComponent } from './components/wait-list/wait-list.component';
import { RegisterDeskComponent } from './components/register-desk/register-desk.component';
import { VistComponent } from './components/vist/vist.component';

const routes: Routes = [
  {
    path: '',
    component: WaitListComponent
  },
  {
    path: 'skeleton',
    component: SkeletonComponent
  },
  {
    path: 'patients',
    component: PatientComponent
  },
  {
    path: 'register-desk',
    component: RegisterDeskComponent
  },
  {
    path: 'visit',
    component: VistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
