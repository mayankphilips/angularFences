import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Project } from './sources/project';

@Injectable()
export class RestService
{
    
    constructor(private http: HttpClient) { }
    private githubUrl = 'http://localhost:8080/fences/api/project';

    getInputs(inputData:any): Observable<any>{
        console.log(inputData);
        let stuff = {
            responseType: "text/plain"
        }
        return this.http.post(this.githubUrl, inputData, {headers: stuff});
    }

    getProjectList() : Observable<Project[]>{
     return this.http.get<Project[]>(this.githubUrl);
    }
    getTools() {
        return this.http.get('http://localhost:8080/fences/api/project/tool');
    }
    getProgressReport(pname:any){
        let url = 'http://localhost:8080/fences/api/project/' + pname + '/fence'

        return this.http.get(url);
    }
}