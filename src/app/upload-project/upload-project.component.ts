import { Component } from '@angular/core';
import { AnalyzeService } from '../analyze.service';
import { ToolSelection } from '../tool-selection';

@Component({
  selector: 'app-upload-project',
  templateUrl: './upload-project.component.html',
  styleUrls: ['./upload-project.component.css']
})
export class UploadProjectComponent{

  toolSelectionModel = new ToolSelection('', 'master', true, 'google_checks', 'no', false, false);

  constructor(private _analyzeProjectService : AnalyzeService){}

  dataDecoder() {

    var decodedSettings = {
      link: this.toolSelectionModel.link, //scalar value 
      branch: this.toolSelectionModel.branch
    }

    var toolSettings = {};
    var checkstyleSetting = {};
    var pmdSetting = {};

    if (this.toolSelectionModel.useCheckstyle) {
      checkstyleSetting['styleguide'] = this.toolSelectionModel.styleguide;
      checkstyleSetting['excludeTestFiles'] = this.toolSelectionModel.excludeTestFiles;
      toolSettings['checkstyle'] = checkstyleSetting;
    }
    if(this.toolSelectionModel.usePMD){
      toolSettings['pmd'] = pmdSetting;
    }


    decodedSettings['settings'] = toolSettings;

    var decodedSettingsJSON = JSON.stringify(decodedSettings);
    console.log(decodedSettingsJSON);



    this._analyzeProjectService.analyzeProject(decodedSettingsJSON)
    .subscribe(
      data => console.log('Successfully Analyzed' , data),
      error => console.error('Failed With Error ' , error)
    )


  }
  
  }

