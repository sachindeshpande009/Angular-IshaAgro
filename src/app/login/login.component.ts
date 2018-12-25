import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private loginService:LoginService) { }
 
  ngOnInit() {
  }

  loginCheck(email:string, pass:string){
    console.log(email,pass);
    let obj={
      "empEmail":email,
      "empPassword":pass
    }
    this.loginService.onLogin(obj).subscribe(res=>{
      console.log(res);
      if(res['result']){
        this.router.navigate(['dashboard']);
      }
      else{
        alert("Invalid username and Password");
      }
    },err=>{
      console.log(err);
    })
  }

}
