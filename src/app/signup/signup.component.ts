import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
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
    if(this.UserObj.address!=""&& this.UserObj.city!=""&& this.UserObj.date!="" && this.UserObj.email!="" && this.UserObj.firstname!="" && this.UserObj.gender!="" && this.UserObj.lastname!="" && this.UserObj.password!="" && this.UserObj.pincode!=0 && this.UserObj.state!="")
    {
      this.UserApiUrl.AddUser(this.UserObj).subscribe({
        next:(AddUser)=>{}
      });
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Sign Up Succesful',
        showConfirmButton: false,
        timer: 1500
      })
      
      this.Route.navigate(['Home'])
    }
    else
    {
      alert("Fields Cannot be Empty !!");
    }
  }
}
