import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { AnalyzeService } from '../analyze.service';
import { RawCodeSelection } from '../raw-code-selection';

@Component({
  selector: 'app-raw-code-analysis',
  templateUrl: './raw-code-analysis.component.html',
  styleUrls: ['./raw-code-analysis.component.css']
})
export class RawCodeAnalysisComponent implements OnInit {

 objectkeys = Object.keys;

 rawCodeSelectionModel = new RawCodeSelection('', 'pmd');

  pReport: any;

  ngOnInit() {
  }
  constructor(private analyzeRawCodeService: AnalyzeService, private restservice: RestService) { }

  submitRawCode() {

    const rawCode: string = this.rawCodeSelectionModel.rawCode;
    let url = '';

    if (this.rawCodeSelectionModel.toolSelected === 'pmd') {
      url = 'http://localhost:8080/fences/api/tool/pmd';
    }

    if (this.rawCodeSelectionModel.toolSelected === 'checkstyle') {
    url = 'http://localhost:8080/fences/api/tool/checkstyle';
    }

    if (this.rawCodeSelectionModel.toolSelected === 'simian') {
    url = 'http://localhost:8080/fences/api/tool/simian';
    }


    this.analyzeRawCodeService.analyzeRawCode(url , rawCode)
    .subscribe(
      data => { this.pReport = data; console.log(this.pReport); },
      error => console.error('Failed With Error ' , error)
    );
  }

  OnClickCodeAnalyze() {
    this.submitRawCode();
  }
}





