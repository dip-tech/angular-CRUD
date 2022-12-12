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


  msg: any = "";
  book: Book = new Book("", "", "", "", 0);

  constructor(private bservice: BookServiceService, private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem("_auth_token") == null) {
      this.router.navigateByUrl("/login");
    }
  }

  public sendPostRequest() {
    if (this.book.book_TITLE == "") {
      alert("BOOK TITLE IS EMPTY");
    }
    else if (this.book.book_AUTHOR == "") {
      alert("BOOK AUTHOR IS EMPTY");
    }
    else if (this.book.book_TYPE == "") {
      alert("BOOK TYPE IS EMPTY");
    }
    else if (this.book.book_PRICE == "0") {
      alert("BOOK PRICE CAN`T BE 0");
    }
    else {
      let resp = this.bservice.addBook(this.book);
      resp.subscribe((data) => {
        this.msg = data;
        alert(this.msg);
      });
      this.book = new Book("", "", "", "", 0);
    }

  }
}
