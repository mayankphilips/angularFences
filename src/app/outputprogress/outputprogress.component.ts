import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-outputprogress',
  templateUrl: './outputprogress.component.html',
  styleUrls: ['./outputprogress.component.css']
})
export class OutputprogressComponent implements OnInit {

  tools = {}
  objectKeys = Object.keys;

  //@Input()
  //inputData = { link :" ",branch:"master", tool : "{}" };
  tool = {};
  
  constructor(public restservice: RestService,private router: Router) { 
    restservice.getTools().subscribe(response => {
      this.tools = response;
    }, error => {
      this.tools = {};
    });
  }
  request = {
    link: "",
    branch: "master",
    tool : this.tool
}
  ngOnInit() {
  }
  selectedcheckstyle : string;
  selecttools : string;
  selectpercentage : string;
  enabled: boolean = true;
  pcreate:any;
  onAnalyze(){
    
   this.restservice.getInputs(this.request).subscribe(data=>{this.pcreate=data});
   
  }

 



  selectChangeHandler(event : any){
    this.selectedcheckstyle = event.target.value;
    console.log(this.selectedcheckstyle);
  }

  selectpecerntagesimilarity(event : any){
    this.selectpercentage = event.target.value;
    console.log(this.selectpercentage);
  }
  
  //selectTool(event:any,value:string){
  // this.inputData.tool="pmd";
  //}

  setValue(toolname: string, parameter: string, value: string,link) {
    if (this.tool[toolname] == undefined)
      this.tool[toolname] = new Object();

    this.tool[toolname][parameter] = value;

    this.request.link=link.value;
    console.log(this.tool);
    console.log(link);
  }

 
  
}
