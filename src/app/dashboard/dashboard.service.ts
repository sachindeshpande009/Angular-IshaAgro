import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DashboardService {

  constructor(private http : HttpClient) { }


 //Register new Employee
 onSubmit(frm:any){
  console.log(frm);
 return this.http.post("http://localhost:3001/addstate",frm,{
    headers:new HttpHeaders({
      'content-type':'application/json'
    })
  });
}

//display all employee
getAllstates(){
  return this.http.get("http://localhost:3001/states",{
    headers:new HttpHeaders({
      'content-type':'application/json'
    })
  });
}

getCurrentstates(_id:string){
  let obj={
    "_id":_id
  }
  return this.http.post("http://localhost:3001/currentstate",obj,{
    headers:new HttpHeaders({
      'content-type':'application/json'
    })
  });
}

updatestates(frm:any){
  console.log(frm);
 return this.http.put("http://localhost:3001/updatestate",frm,{
    headers:new HttpHeaders({
      'content-type':'application/json'
    })
  });
}

deletestates(_id:string){
  var id={
    "_id":_id
  }
  let options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    body: id,
  };
  return this.http.delete('http://localhost:3001/deletestate', options);
}
}