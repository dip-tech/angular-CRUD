import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../book-service.service';
import { Book } from '../book/book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {

  bookList: any = [];
  bookListLength: number = 0;
  noRecord: string = "";
  confrimDeleteBookId: any = "";


  constructor(private bService: BookServiceService, private router: Router) {

  }

  ngOnInit(): void {
    if (localStorage.getItem("_auth_token") == null) {
      this.router.navigateByUrl("/login");
    }
    else {
      let resp = this.bService.getAllBooks();
      resp.subscribe((data) => {
        this.bookList = data;
        this.bookListLength = this.bookList.length;
      });
      setTimeout(() => { this.noRecord = "NO BOOK RECORD FOUND ON SYSTEM."; }, 500)
    }

  }

  passDeleteBookID(id: number) {
    this.confrimDeleteBookId = id;
  }



  public sendDeleteRequest(id: number) {
    let r = this.bService.deleteBook(id);
    r.subscribe((data) => {
      this.ngOnInit();

    });

  }

}
