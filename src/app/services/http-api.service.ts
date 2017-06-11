import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpApiService {

  private apiUrl = 'http://localhost:4000/api/';

  constructor(private http: Http) {}
  
  getUsers() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    
    return this.http.get(this.apiUrl + 'users', options)
      .map(res => res.json());
  }

}