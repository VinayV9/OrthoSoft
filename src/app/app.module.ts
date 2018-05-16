import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkeletonComponent } from './components/skeleton/skeleton.component';
import { DisplayPartsComponent } from './components/display-parts/display-parts.component';

@NgModule({
  declarations: [
    AppComponent,
    SkeletonComponent,
    DisplayPartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
