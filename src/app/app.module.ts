import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputdataComponent } from './inputdata/inputdata.component';
import { OutputprogressComponent } from './outputprogress/outputprogress.component';
import { RawcodeanalysisComponent } from './rawcodeanalysis/rawcodeanalysis.component';

@NgModule({
  declarations: [
    AppComponent,
    InputdataComponent,
    OutputprogressComponent,
    RawcodeanalysisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
