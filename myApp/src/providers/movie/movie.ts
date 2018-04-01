import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

//ser usada dentro de outra classe
@Injectable()
export class MovieProvider {

  private baseUrlAPI = "https://api.themoviedb.org/3";
  constructor(public http: HttpClient) {
    console.log('Hello MovieProvider Provider');
  }
 
  getLatestMovie () {
    return this.http.get(this.baseUrlAPI + "/movie/latest?api_key=4e2b282318e3f52eaab05a510ffc68bf");
  }

}
