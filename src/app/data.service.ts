import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }


  getDataJson() {
    return this.http.get('http://jsonplaceholder.typicode.com/users/1')
  }

}
