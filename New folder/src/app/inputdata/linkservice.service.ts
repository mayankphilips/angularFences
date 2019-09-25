import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Data } from '../models/data.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class LinkService {

  constructor(private http:HttpClient) {}

  private userUrl = 'http://localhost:8080/fences/api/project/';
  //private userUrl = '/api';

//   public getData() {
//     return this.http.get<Data>(this.userUrl);
//   }

//   public deleteUser(user) {
//     return this.http.delete(this.userUrl + "/"+ user.id);
//   }

  public createUser(datalink) {
    return this.http.post<Data>(this.userUrl, datalink);
  }

}
