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
    return this.HTTP.post<Book>(this.ApiUrl+"/api/Book/Post",Bookdb);
  }

  GetAllBook():Observable<Book[]>
  {
    return this.HTTP.get<Book[]>(this.ApiUrl+"/api/Book/Get");
  }

  FindBook(id:number):Observable<Book>
  {
    return this.HTTP.get<Book>(this.ApiUrl+"/api/Book/Get/"+id)    
  }
  updateDetail(BookEdit:Book):Observable<Book>
  {
    return this.HTTP.put<Book>(this.ApiUrl+"/api/Book/Put",BookEdit)
  }
  deleteBook(id:number):Observable<Book>
  {
    return this.HTTP.delete<Book>(this.ApiUrl+"/api/Book/Delete/"+id);
  }
  showCategory(category:string):Observable<Book[]>
  {
    return this.HTTP.get<Book[]>(this.ApiUrl+"/api/Book/BookCat/"+category);
  }
}
