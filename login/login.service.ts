import { user } from './user.model';
import { Injectable } from '@angular/core';
import {  Http,Headers,Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class LoginService {

 constructor(private http:Http) { }
  Login(user:user){
    debugger;
   let headers=new Headers();
   let body=JSON.stringify(user)
   console.log(body);
   headers.append('Content-Type','application/json');
   return this.http.post("http://localhost/AngulaestApi/api/Login",body,{headers:headers}).map(res => res.json());
 
  }
}
