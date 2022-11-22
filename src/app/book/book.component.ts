import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../book-service.service';
import { Book } from './book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  
  msg:any = "";
  book: Book = new Book("","","","",0);

  constructor(private bservice: BookServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  public sendPostRequest() {
    let resp = this.bservice.addBook(this.book);
    resp.subscribe((data)=>{
      this.msg=data;
      alert(this.msg);
    });
    this.book= new Book("","","","",0);
  }
}
