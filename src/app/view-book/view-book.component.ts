import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../book-service.service';
import { Book } from '../book/book';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {

  bookList:any=[];
  

  constructor(private bService:BookServiceService) { }

  ngOnInit(): void {
    let resp=this.bService.getAllBooks();
    resp.subscribe((data)=>this.bookList=data);
  }

  public sendDeleteRequest(id:number){
    let r=this.bService.deleteBook(id);
    r.subscribe((data)=>console.log(data));
  }

}
