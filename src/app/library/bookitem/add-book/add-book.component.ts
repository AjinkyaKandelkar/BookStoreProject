import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { BookServiceService } from 'src/app/book-service.service';
import { Book } from 'src/app/Book.module';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  
  @ViewChild("isbn") RefIsbn!:ElementRef;
  @ViewChild("bookname") RefBname!:ElementRef;
  @ViewChild("imgpath") RefPath!:ElementRef;
  @ViewChild("description") RefDesc!:ElementRef;
  @ViewChild("author") RefAuthor!:ElementRef;
  @ViewChild("pages") RefPages!:ElementRef;
  @ViewChild("price") RefPrice!:ElementRef;

  @Output() Outputdecorator= new EventEmitter<any>();
  BookObj!:Book;
  
  constructor( private ApiUrl:BookServiceService) { }

  ngOnInit(): void {
  }

  // AddBook()
  // { 
    
  //   if(this.BookObj.isbn=="")
  //   {
  //     alert("Fields cannot be empty")
  //   }  
  //   else if(this.BookObj.author =="" && !/^[a-zA-Z]*$/g.test(this.BookObj.author))
  //   {
     
  //     alert("Author Name cannot be empty");
  //   }
  //   else if( this.BookObj.bookname=="")
  //   {
  //       alert("Bookname Cannot be Empty");
  //   }
  //   else if( this.BookObj.description=="")
  //     alert("Description cannot be empty")
  //   else if(this.BookObj.imgpath =="")
  //     alert("Image cannot be empty")
  //   else if( this.BookObj.pages ==0)
  //     alert("Pages cannot be zero")
  //   else if( this.BookObj.price ==0 )
  //     alert("Price cannot be zero")
  //   else
  //   {
  //     alert("succesfull");
  //     this.ApiUrl.AddBook(this.BookObj).subscribe({
  //       next:(AddBook)=>{}
  //     })
      
  //   }
    
  // }

  AddBook()
  {
    const Bisbn = this.RefIsbn.nativeElement.value;
    const Bbookname = this.RefBname.nativeElement.value;
    const Bimgpath = this.RefPath.nativeElement.value;
    const Bdescription = this.RefDesc.nativeElement.value;
    const Bauthor = this.RefAuthor.nativeElement.value;
    const Bpages = this.RefPages.nativeElement.value;
    const Bprice = this.RefPrice.nativeElement.value;

    this.BookObj=new Book(0,Bisbn,Bbookname,Bimgpath,Bauthor,Bprice,Bpages,Bdescription);
    this.ApiUrl.AddBook(this.BookObj).subscribe({
      next:(addbook)=>{}
    });
    window.location.reload();
    // this.Outputdecorator.emit(this.BookObj);
  }
}
