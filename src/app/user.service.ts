import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './model/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  public sendLoginRequest(u:User){
    return this.http.post("http://localhost:8001/user/login",u,{responseType:"text"});
  }
}
