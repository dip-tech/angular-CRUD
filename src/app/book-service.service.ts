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

   public getAllBooks(){
    return this.http.get("http://localhost:8001/book/get-all-book");
   }

   public getBook(id:number){
    return this.http.get("http://localhost:8001/book/get-book/"+id);
   }

   public updateBook(b:Book){
    return this.http.put("http://localhost:8001/book/update-book",b);
   }

   public deleteBook(id:number){
    console.log(id);
    return this.http.delete("http://localhost:8001/book/delete-book/"+id,{responseType:'text' as 'json'});
   }
}
