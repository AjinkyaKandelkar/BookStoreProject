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
  @ViewChild("category") RefCategory!:ElementRef;
  
  @Output() Outputdecorator= new EventEmitter<any>();
  BookObj!:Book;
  
  constructor( private ApiUrl:BookServiceService) { }

  ngOnInit(): void {
  }

  AddBook()
  {
    const Bisbn = this.RefIsbn.nativeElement.value;
    const Bbookname = this.RefBname.nativeElement.value;
    const Bimgpath = this.RefPath.nativeElement.value;
    const Bdescription = this.RefDesc.nativeElement.value;
    const Bauthor = this.RefAuthor.nativeElement.value;
    const Bpages = this.RefPages.nativeElement.value;
    const Bprice = this.RefPrice.nativeElement.value;
    const Bcategory=this.RefCategory.nativeElement.value;

    
    if(Bisbn=="")
    {
      alert("Fields cannot be empty")
    }
    else if(Bauthor =="" && !/^[a-zA-Z]*$/g.test(Bauthor))
    {
      alert("Author Name cannot be empty");
    }
    else if( Bbookname==""&& !/^[a-zA-Z]*$/g.test(Bbookname))
    {
        alert("Bookname Cannot be Empty");
    }
    else if(Bimgpath=="")
    {
      alert("Image cannot be empty")
    }
    else if( Bpages ==0 && !/[0-9]*$/g.test(Bpages) )
      alert("Pages cannot be zero")
    else if( Bprice ==0  && !/[0-9]*$/g.test(Bprice) )
      alert("Price cannot be zero")
    else
    {
      this.BookObj=new Book(0,Bisbn,Bbookname,Bimgpath,Bauthor,Bprice,Bpages,Bdescription,Bcategory);
      console.log(this.BookObj);
      this.ApiUrl.AddBook(this.BookObj).subscribe({
        next:(addbook)=>{}
      });
    }
    window.location.reload();

   
  }
}
