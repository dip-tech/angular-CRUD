import { Injectable } from '@angular/core';
import { HttpClient ,HttpParams} from '@angular/common/http';
import { User } from './model/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  public sendLoginRequest(u:User){
    return this.http.post("http://localhost:8001/user/login",u,{responseType:"text"});
  }

  public sendAddUserRequest(u:User){
    return this.http.post("http://localhost:8001/user/adduser",u,{responseType:"text"});
  }

  public sendCheckTokenRequest(token:string){
    const queryParam=new HttpParams().set("token",token);
    return this.http.get("http://localhost:8001/user/get-token-validity",{params:queryParam,responseType:"text"});
  }

}
