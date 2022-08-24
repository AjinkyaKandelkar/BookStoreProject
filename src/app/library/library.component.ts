import { Component, OnInit } from '@angular/core';
import { Book } from '../Book.module';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  libBook:Book[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
