import { Component } from '@angular/core';
import { RawCodeSelection } from '../raw-code-selection';
import { AnalyzeService } from '../analyze.service';

@Component({
  selector: 'app-raw-code-analysis',
  templateUrl: './raw-code-analysis.component.html',
  styleUrls: ['./raw-code-analysis.component.css']
})
export class RawCodeAnalysisComponent{

  rawCodeSelectionModel = new RawCodeSelection('','pmd');

  constructor(private _analyzeRawCodeService : AnalyzeService){}

  submitRawCode(){

    var _rawCode:string = this.rawCodeSelectionModel.rawCode;
    var _url = "";

    if(this.rawCodeSelectionModel.toolSelected === 'pmd')
    {
      _url = 'http://localhost:8080/fences/api/tool/pmd';
    }

    if(this.rawCodeSelectionModel.toolSelected === 'checkstyle')
    {
      _url = 'http://localhost:8080/fences/api/tool/checkstyle';
    }

    if(this.rawCodeSelectionModel.toolSelected === 'simian')
    {
      _url = 'http://localhost:8080/fences/api/tool/simian';
    }


    this._analyzeRawCodeService.analyzeRawCode(_url , _rawCode)
    .subscribe(
      data => console.log('Successfully Analyzed Raw Code' , data),
      error => console.error('Failed With Error ' , error)
    )


  }

  // constructor(private _analyzeProjectService : AnalyzeService){}

  // dataDecoder() {

  //   var decodedSettings = {
  //     link: this.toolSelectionModel.link, //scalar value 
  //     branch: this.toolSelectionModel.branch
  //   }

  //   var toolSettings = {};
  //   var checkstyleSetting = {};
  //   var pmdSetting = {};

  //   if (this.toolSelectionModel.useCheckstyle) {
  //     checkstyleSetting['styleguide'] = this.toolSelectionModel.styleguide;
  //     checkstyleSetting['excludeTestFiles'] = this.toolSelectionModel.excludeTestFiles;
  //     toolSettings['checkstyle'] = checkstyleSetting;
  //   }
  //   if(this.toolSelectionModel.usePMD){
  //     toolSettings['pmd'] = pmdSetting;
  //   }


  //   decodedSettings['settings'] = toolSettings;

  //   var decodedSettingsJSON = JSON.stringify(decodedSettings);
  //   console.log(decodedSettingsJSON);
  // }



}
