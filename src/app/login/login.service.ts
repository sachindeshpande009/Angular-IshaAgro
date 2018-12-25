import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable()
export class LoginService {

  constructor(private http:HttpClient) { }


  onLogin(frm:any){
    console.log(frm);
   return this.http.post("http://localhost:3001/employeeLogin",frm,{
      headers:new HttpHeaders({
        'content-type':'application/json'
      })
    });
  }
}
