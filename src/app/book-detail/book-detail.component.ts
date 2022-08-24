import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookServiceService } from '../book-service.service';
import { Book } from '../Book.module';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  BookObj!:Book;
  constructor( private ApiUrl:BookServiceService, private route:ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (paramerter)=>{
        // console.log(paramerter['id']);
        this.ApiUrl.FindBook(paramerter['id']).subscribe(
          (sub)=>{
            this.BookObj=sub;
            console.log(this.BookObj);
          }
        )
      }
      )
  }


}
