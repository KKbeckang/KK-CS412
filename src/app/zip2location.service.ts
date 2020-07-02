import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Zip2locationService {
  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  getlocation(zipcode: string) {
    // returns an observable
    return this.http.get('http://localhost:3000/PS4/${zipcode}');


  }
}
