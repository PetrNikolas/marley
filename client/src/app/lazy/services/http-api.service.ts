// Angular libs
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

// RxJS
import 'rxjs/add/operator/map';

@Injectable()
export class HttpApiService {

  private apiUrlV1 = 'http://localhost:4000/api/v1/';

  constructor(private http: Http) {}
  
  getUsers() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    
    return this.http.get(this.apiUrlV1 + 'users', options)
      .map(res => res.json());
  }

}