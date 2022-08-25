import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './User.module';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  UserApi:string="https://localhost:7188/";
  constructor(private HTTP:HttpClient) { }
  AddUser(UserObj:User):Observable<User>
  {
    return this.HTTP.post<User>(this.UserApi+"api/User/Post",UserObj);
  }
  CheckUser(uemail:string,upass:string):Observable<boolean>
  {
    return this.HTTP.get<boolean>(this.UserApi+"api/User/CheckUser/"+uemail+"/"+upass);
  }
}
