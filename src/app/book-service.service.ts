import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from './book/book';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
 
  constructor(private http:HttpClient) {
   }

   public addBook(b:Book){
    const headers=new HttpHeaders().set("Authorization","Bearer "+localStorage.getItem("_auth_token"));
      return this.http.post("http://localhost:8001/book/add-book",b,{headers:headers,responseType:'text' as 'json'});
   }

   public getAllBooks(){
    const headers=new HttpHeaders().set("Authorization","Bearer "+localStorage.getItem("_auth_token"));
    return this.http.get("http://localhost:8001/book/get-all-book",{headers:headers,responseType:'json'});
   }

   public getBook(id:number){
    const headers=new HttpHeaders().set("Authorization","Bearer "+localStorage.getItem("_auth_token"));
    return this.http.get("http://localhost:8001/book/get-book/"+id,{headers:headers,responseType:'json'});
   }

   public updateBook(b:Book){
    const headers=new HttpHeaders().set("Authorization","Bearer "+localStorage.getItem("_auth_token"));
    return this.http.put("http://localhost:8001/book/update-book",b,{headers:headers,responseType:'text' as 'json'});
   }

   public deleteBook(id:number){
    console.log(id);
    const headers=new HttpHeaders().set("Authorization","Bearer "+localStorage.getItem("_auth_token"));
    return this.http.delete("http://localhost:8001/book/delete-book/"+id,{headers:headers,responseType:'text' as 'json'});
   }
}
