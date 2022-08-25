import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookServiceService } from '../book-service.service';
import { UserServiceService } from '../user-service.service';
import { User } from '../User.module';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  UserObj:User= new User(0,"","","","","","","","",0,"");
  constructor( private UserApiUrl:UserServiceService, private Route:Router ) { }
  ngOnInit(): void {
  }

  adduser()
  {
    this.UserApiUrl.AddUser(this.UserObj).subscribe(
      (AddUser)=>{
        console.log(AddUser);
      }
    )
  }
}
