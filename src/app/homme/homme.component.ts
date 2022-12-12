import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-homme',
  templateUrl: './homme.component.html',
  styleUrls: ['./homme.component.css']
})
export class HommeComponent implements OnInit {

  constructor(private router:Router,private uService:UserService) { }

  ngOnInit(): void {
    

    if(localStorage.getItem("_auth_token")==null){
      this.router.navigateByUrl("/login");
    }
    else{
      let httpResponse=this.uService.sendCheckTokenRequest(<string>localStorage.getItem("_auth_token"));
      httpResponse.subscribe(isTokenValid=>{
        localStorage.setItem("isTokenValid",isTokenValid);
        if(isTokenValid!="true")
        {
          
          this.router.navigateByUrl("/error/"+"TOEN EXPIRED");
        }
      })

    }
   
  }

  public doLogOut(){
    localStorage.removeItem("_auth_token");
    this.router.navigateByUrl("/login");
  }

}
