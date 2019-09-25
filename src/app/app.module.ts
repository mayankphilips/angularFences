import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputdataComponent } from './inputdata/inputdata.component';
import { OutputprogressComponent } from './outputprogress/outputprogress.component';
import { RawcodeanalysisComponent } from './rawcodeanalysis/rawcodeanalysis.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {RestService} from './rest.service';
import { ProjectListComponent } from './project-list/project-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProgressreportComponent } from './progressreport/progressreport.component';



@NgModule({
  declarations: [
    AppComponent,
    InputdataComponent,
    OutputprogressComponent,
    RawcodeanalysisComponent,
    ProjectListComponent,
    NavbarComponent,
    ProgressreportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [
    RestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }