import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { BookServiceService } from '../book-service.service';
import { Book } from '../Book.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Books!:Book[];

  CookBooks:string="cooking"
  NovelBooks:string="novel";
  ComicBooks:string="comic";
  BioBooks:string="Bio";
  FanBooks:string="fantasy";
  HisBooks:string="history";
  HorrorBooks:string="horror";
  MystBooks:string="mystery";
  PoetBooks:string="poetry";
  RomBooks:string="romance";
  SciBooks:string="scifi";
  ThrilBooks:string="thriller";
  constructor( private HTTP:HttpClient  ,private ApiServ:BookServiceService, private route:Router) { }

  ngOnInit(): void {
    this.ApiServ.GetAllBook().subscribe(
      (getbooks)=>{ 
        this.Books=getbooks;
      }
    )
  }
  // getcat()
  // {
  //   this.route.navigate(['category',this.BookByCat])
  // }

}
