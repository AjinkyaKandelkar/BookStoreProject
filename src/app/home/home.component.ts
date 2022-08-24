import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../book-service.service';
import { Book } from '../Book.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Books!:Book[]
  constructor( private HTTP:HttpClient  ,private ApiServ:BookServiceService) { }

  ngOnInit(): void {
    this.ApiServ.GetAllBook().subscribe(
      (getbooks)=>{ 
        this.Books=getbooks;
      }
    )

  }

}
