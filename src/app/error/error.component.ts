import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  msg:string=""
  constructor(private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe(param=>this.msg=param["message"]);
  }

}
