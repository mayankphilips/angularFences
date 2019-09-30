import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-outputprogress',
  templateUrl: './outputprogress.component.html',
  styleUrls: ['./outputprogress.component.css']
})
export class OutputprogressComponent implements OnInit {
constructor(public restservice: RestService, private router: Router) {
    restservice.getTools().subscribe(response => {
      this.tools = response;
    }, error => {
      this.tools = {};
    });
  }

  tools = {};
  objectKeys = Object.keys;
  pr: any;
  tool = {} ;
  request = {
    link: '',
    branch: 'master',
    tool : this.tool
};
  selectedcheckstyle: string;
  selecttools: string;
  selectpercentage: string;
  enabled: true;
  ngOnInit() {
  }

  onAnalyze() {
   this.restservice.getInputs(this.request).subscribe(data => {this.pr = data; console.log(data); } );
  }

  selectChangeHandler(event: any) {
    this.selectedcheckstyle = event.target.value;
    console.log(this.selectedcheckstyle);
  }

  selectpecerntagesimilarity(event: any) {
    this.selectpercentage = event.target.value;
    console.log(this.selectpercentage);
  }
  setValue(toolname: string, parameter: string, value: string, link) {
    if (this.tool[toolname] === undefined) {
      this.tool[toolname] = new Object(); }

    this.tool[toolname][parameter] = value;

    this.request.link = link.value;
    console.log(this.tool);
    console.log(link);
  }
}
