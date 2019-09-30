import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToolSelection } from './tool-selection';

@Injectable({
  providedIn: 'root'
})
export class AnalyzeService {

  urlproject = 'http://localhost:8080/fences/api/project';
  constructor(private http: HttpClient) { }


  analyzeProject(toolsSelected: string) {
    return this.http.post<any>(this.urlproject, toolsSelected);
  }



  analyzeRawCode( urlrawCode: string , rawCode: string) {
    return this.http.post<any>(urlrawCode , rawCode);
  }


}


