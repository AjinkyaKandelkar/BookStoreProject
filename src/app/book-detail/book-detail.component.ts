import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { BookServiceService } from '../book-service.service';
import { Book } from '../Book.module';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  BookObj!:Book;
  constructor( private ApiUrl:BookServiceService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void 
  {
    this.route.params.subscribe(
      (paramerter)=>{
        this.ApiUrl.FindBook(paramerter['id']).subscribe(
          (sub)=>{
            this.BookObj=sub;
          }
        )
      }
      )
  }
  editedBook()
  { 
    this.ApiUrl.updateDetail(this.BookObj).subscribe(
      (editobj)=>{
      }
    )
  }
  deletebook()
  {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        this.ApiUrl.deleteBook(this.BookObj.id).subscribe(
          (deleteObj)=>{}
        )

        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        this.router.navigate(['library'])
       
      }
    })
    
  }

}
