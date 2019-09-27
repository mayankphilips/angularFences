import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ToolSelection } from './tool-selection';

@Injectable({
  providedIn: 'root'
})
export class AnalyzeService {

  _url_project = 'http://localhost:8080/fences/api/project';
  
  constructor(private _http: HttpClient) { }


  analyzeProject(toolsSelected: string){
    return this._http.post<any>(this._url_project,toolsSelected)
  }



  analyzeRawCode( _url_rawCode:string , _rawCode: string){
    return this._http.post<any>(_url_rawCode , _rawCode)
  }


}


