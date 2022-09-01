import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from './Question.module';
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
  CheckUser(uemail:string,upass:string):Observable<User>
  {
    return this.HTTP.get<User>(this.UserApi+"api/User/CheckUser/"+uemail+"/"+upass);
  }
  EditUser(UserObj:User):Observable<User>
  {
    return this.HTTP.put<User>(this.UserApi+"api/User/Put",UserObj);
  }
  FindUser(id:number):Observable<User>
  {
    return this.HTTP.get<User>(this.UserApi+"api/User/Get/"+id);
  }
  ForgotPass(Mail:string):Observable<User>
  {
    return this.HTTP.get<User>(this.UserApi+"api/User/ForgotPass/"+Mail);
  }
  UserQues():Observable<Question[]>
  {
    return this.HTTP.get<Question[]>("https://localhost:7188/api/Question");
  }
}
