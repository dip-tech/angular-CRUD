import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUser:User=new User();

  constructor(private uService:UserService) { }

  ngOnInit(): void {
  }

  public doLogin(){
    if(this.loginUser.username=="" || this.loginUser.password==""){
      alert("Either username or password is empty.");
    }
    else{
      let resp=this.uService.sendLoginRequest(this.loginUser);
      resp.subscribe(data=>console.log(data));
    }
  }

}
