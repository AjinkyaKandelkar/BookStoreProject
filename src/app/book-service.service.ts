import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './Book.module';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  ApiUrl:string="https://localhost:7188" 
  // /api/Book
  constructor(private HTTP:HttpClient ) 
  { }
  // Post Method
  AddBook(Bookdb:Book):Observable<Book>
  {
    return this.HTTP.post<Book>(this.ApiUrl+"/api/Book",Bookdb);
  }

  GetAllBook():Observable<Book[]>
  {
    return this.HTTP.get<Book[]>(this.ApiUrl+"/api/Book");
  }

  FindBook(id:number):Observable<Book>
  {
    return this.HTTP.get<Book>(this.ApiUrl+"/api/Book/"+id)    
  }
}
