import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
    getProjectList(){
     return this.http.get(this.githubUrl);
    }
    getTools() {
        return this.http.get('http://localhost:8080/fences/api/project/tool');
    }
}