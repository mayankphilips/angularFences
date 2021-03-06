import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjectListComponent } from '../project-list/project-list.component';
import { Location, JsonPipe } from '@angular/common';
import { RestService } from '../rest.service';
import { ProjectReport } from '../sources/projectreport';
// import {MdDialog, MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-progressreport',
  templateUrl: './progressreport.component.html',
  styleUrls: ['./progressreport.component.css']
})
export class ProgressreportComponent implements OnInit {

  projectname: any;
  projectstatus: ProjectReport;

  report: any[];
  pReport: any;
  objectkeys = Object.keys;
  constructor(private location: Location, public restservice: RestService) {
  }

  ngOnInit() {
    this.projectname = this.location.getState();
    console.log(this.projectname.name);
  }

  onClickGetStatus() {
    return this.restservice.getFenceReport(this.projectname.name).subscribe((data: ProjectReport) => {
      this.projectstatus = data;
      const r = this.objectkeys(data.report);
      this.report = [];
      for (const tool of r) {
        this.report.push({
          name: tool,
          r : data.report[tool]
        });
      }
      console.log(this.report);
    });
  }

  onClickGetReport() {
    return this.restservice.getReport(this.projectname.name).subscribe((data) => this.pReport = (data)
  );
  }

  onClickGetDelete() {
    return this.restservice.deleteProject(this.projectname.name).subscribe((data) => {console.log(data); });
  }
}
