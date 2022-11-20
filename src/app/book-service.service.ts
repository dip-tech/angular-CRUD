import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from './book/book';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(private http:HttpClient) {
   }

   public addBook(b:Book){
      return this.http.post("http://localhost:8001/book/add-book",b,{responseType:'text' as 'json'});
   }
}
