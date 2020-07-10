import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ResProviderService {

  constructor(public http:HttpClient) { }
  apiUrl = 'https://coronavirus-19-api.herokuapp.com/countries' ;
  getInfo(){
    return new Promise(resolve => {
    this.http.get(this.apiUrl+'/morocco').subscribe(data => {
        resolve(data);
      }, err => {
         console.log(err);
        
      });
    });
  };
}
