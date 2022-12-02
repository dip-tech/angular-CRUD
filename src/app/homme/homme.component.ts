import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-homme',
  templateUrl: './homme.component.html',
  styleUrls: ['./homme.component.css']
})
export class HommeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("_auth_token")==null){
      this.router.navigateByUrl("/login");
    }
  }

}
