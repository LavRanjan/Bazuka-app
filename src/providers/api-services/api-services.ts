import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiServicesProvider {

    constructor(public http: HttpClient) {
      console.log('Hello ApiServicesProvider Provider');
    }

    // fuction
    // listAddressApi_get() {
    //   return this.http.get(
    //   "http://localhost:8000/api/login",
    //   { headers: new HttpHeaders().set('Authorization', 'Bearer' + ' ' + localStorage.getItem("access_token")) })

    // }

    // function 2
    listAddressApi_post(email,password){
      // var headerss = new Headers();
      // headers.append("Accept", 'application/json');
      // headers.append('Content-Type', 'application/json' );
      
  
      let postData = {
              "email": "ranjan.g@pacewisdom.com",
              "password": "0000252525"
      }
  
     return  this.http.post("http://localhost:8000/api/login", postData);
      //   .subscribe(data => {
      //     console.log(data['_body']);
      //    }, error => {
      //     console.log(error);
      //   });
      }
}
