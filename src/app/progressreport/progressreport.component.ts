import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjectListComponent } from '../project-list/project-list.component';
import { Location, JsonPipe } from '@angular/common';
import { RestService } from '../rest.service';
import { ProjectReport } from '../sources/projectreport';
@Component({
  selector: 'app-progressreport',
  templateUrl: './progressreport.component.html',
  styleUrls: ['./progressreport.component.css']
})
export class ProgressreportComponent implements OnInit {

  projectname: any;
  projectstatus: ProjectReport;

  report: any[]

  objectkeys = Object.keys;


  //fenceurl="http://localhost:8080/fences/api/project//fence";

  constructor(private location: Location, public restservice: RestService) {
    //this.projectstatus= {};
  }


  ngOnInit() {
    this.projectname = this.location.getState();
    console.log(this.projectname.name);
  }

  onClickGetStatus() {

    // return this.restservice.getProgressReport(url).subscribe(data=>{this.projectstatus=data});
    // return this.restservice.getProgressReport(url).subscribe(data=>{
    //   console.log("data" +data)
    //   this.projectstatus=data
    //   console.log("status"+this.projectstatus)});
    //return this.restservice.getProgressReport(url).subscribe(data=>{console.log(data)});
    return this.restservice.getProgressReport(this.projectname.name).subscribe((data: ProjectReport) => {
      this.projectstatus = data
      let r = this.objectkeys(data['report']);
      this.report = []
      for (let tool of r) {
        this.report.push({
          name: tool,
          r : data['report'][tool]
        });
      }
      console.log(this.report);
    });
  }


}
