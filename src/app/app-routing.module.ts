import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkeletonComponent } from './components/skeleton/skeleton.component';
import { PatientComponent } from './components/patient/patient.component';

const routes: Routes = [
  {
    path: 'skeleton',
    component: SkeletonComponent
  },
  {
    path: 'patients',
    component: PatientComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
