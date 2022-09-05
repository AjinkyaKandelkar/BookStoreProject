import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Answerclass } from './question/AnswerClass';
import { UserServiceService } from './user-service.service';

@Injectable({
  providedIn: 'root'
})
export class AnswerServiceService {

  constructor( private HTTP:HttpClient ) { }
  ApiUrl:string="https://localhost:7188/"
 
  PostAnswers(AnsObj:Answerclass):Observable<Answerclass>
  {
    return this.HTTP.post<Answerclass>(this.ApiUrl+"api/Answer",AnsObj)
  }
  getUserAns(id:number):Observable<Answerclass[]>
  {
    return this.HTTP.get<Answerclass[]>(this.ApiUrl+"api/Answer"+"/"+id);
  }
}
