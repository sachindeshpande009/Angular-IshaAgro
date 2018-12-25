import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';


@Injectable()
export class RegistrationService {

  constructor(private http:HttpClient) { }

  //Register new Employee
  onRegister(frm:any){
    console.log(frm);
   return this.http.post("http://localhost:3001/registration",frm,{
      headers:new HttpHeaders({
        'content-type':'application/json'
      })
    });
  }

  //display all employee
  getAllemployee(){
    return this.http.get("http://localhost:3001/employee",{
      headers:new HttpHeaders({
        'content-type':'application/json'
      })
    });
  }

  getCurrentEmployee(_id:string){
    let obj={
      "_id":_id
    }
    return this.http.post("http://localhost:3001/getEmployee",obj,{
      headers:new HttpHeaders({
        'content-type':'application/json'
      })
    });
  }

  updateEmployee(frm:any){
    console.log(frm);
   return this.http.put("http://localhost:3001/registration",frm,{
      headers:new HttpHeaders({
        'content-type':'application/json'
      })
    });
  }

  deleteEmployee(_id:string){
    var id={
      "_id":_id
    }
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: id,
    };
    return this.http.delete('http://localhost:3001/registration', options);
  }
}
