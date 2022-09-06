import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserServiceService } from '../user-service.service';
import { User } from '../User.module';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.css']
})
export class SetPasswordComponent implements OnInit {

  UserObj!:User;
  changedPassObj!:User;
  hide=true;
  constructor( private route:Router, private ActRoute:ActivatedRoute, private UserApi:UserServiceService ) { }

  ngOnInit(): void {
    this.ActRoute.params.subscribe(
      (parameter)=>{
        this.UserApi.FindUser(parameter['id']).subscribe(
          (gotUser) =>{
            this.UserObj=gotUser;
          }
        )
      }
    )
    

  }

  setpass(newpass:string, repeatpass:string)
  {
    if(newpass.length<6)
    {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Password length is less',
        showConfirmButton: false,
        timer: 1500
      });
    }
    else if(newpass == repeatpass)
    {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Password Changes Succesfully!',
        showConfirmButton: false,
        timer: 1500
      });

      // Update the password
      this.UserApi.ChangePass(this.UserObj.id,newpass).subscribe(
        (getUser)=>{
          console.log(getUser);
        }
      )


      setTimeout(() => {
        this.route.navigate(["Home"]);
        
      }, 3000);
    }
    else
    {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Passwords do not match',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

}
