
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

//ser usada dentro de outra classe
@Injectable()
export class MovieProvider {
  
  private baseUrlAPI = "https://api.themoviedb.org/3";
  constructor(public http: Http ) {
    console.log('Hello MovieProvider Provider');
  }
 
  getLatestMovie (page = 1)  {
    return this.http.get(this.baseUrlAPI + `/movie/popular?page=${page}&api_key=` + this.getAPIKey());
  }

  getLatestDetails (filmeid) {
    return this.http.get(this.baseUrlAPI + `/movie/${filmeid}?api_key=` + this.getAPIKey());
  }

  getAPIKey(): string {
    return "4e2b282318e3f52eaab05a510ffc68bf";
  }
}
