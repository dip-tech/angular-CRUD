import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUser:User=new User();

  constructor(private uService:UserService, private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("_auth_token")!=null){
      this.router.navigateByUrl("");
    }
    
  }

  public doLogin(){
    if(this.loginUser.username=="" || this.loginUser.password==""){
      alert("Either username or password is empty.");
    }
    else{
      let resp=this.uService.sendLoginRequest(this.loginUser);
      resp.subscribe(data=>{
        if(data!="YOU ARE NOT REGISTERED USER | CHECK USERNAME AND PASSWORD"){
          localStorage.setItem("_auth_token",data);
          this.router.navigateByUrl("");
        }
      });
    }
  }

}
