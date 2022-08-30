import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { BookServiceService } from '../book-service.service';
import { Book } from '../Book.module';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  BookObj!:Book[];
  catname!:string;
  constructor(private HTTP:HttpClient, private BookApi:BookServiceService, private route:ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (parameter)=>{
        this.BookApi.showCategory(parameter['category']).subscribe(
          (cat)=>{
           this.BookObj=cat; 
           this.seecat()
          }
        )
      }
    );
    
  }
  
  seecat()
  {
    for (let index = 0; index < this.BookObj.length; index++) {
      const element = this.BookObj[index];
      this.catname=element.category;
    } 
  }

}
