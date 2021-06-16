import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvComponent } from './cv/cv.component';
import {HeaderComponent} from './cv/ui/header/header.component';
import {CvInfoComponent} from './cv/ui/cv-info/cv-info.component';
import {CvExperienceComponent} from './cv/ui/cv-experience/cv-experience.component';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    HeaderComponent,
    CvInfoComponent,
    CvExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
