import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './User.module';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  UserApi:string="https://localhost:7188/api/";
  constructor(private HTTP:HttpClient) { }
  AddUser(UserObj:User):Observable<User>
  {
    return this.HTTP.post<User>(this.UserApi+"User",UserObj);
  }
}
