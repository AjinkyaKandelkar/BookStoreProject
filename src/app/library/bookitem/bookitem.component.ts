import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/book-service.service';
import { Book } from 'src/app/Book.module';

@Component({
  selector: 'app-bookitem',
  templateUrl: './bookitem.component.html',
  styleUrls: ['./bookitem.component.css']
})
export class BookitemComponent implements OnInit {
  libBook: Book[]=[];
  constructor( private ApiUrl:BookServiceService ) { }

  ngOnInit(): void {
    this.ApiUrl.GetAllBook().subscribe(
      {
        next:(getBook)=>{
          this.libBook=getBook;
        }
      }
    )
  }
}
