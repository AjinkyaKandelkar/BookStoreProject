import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserServiceService } from '../user-service.service';
import { User } from '../User.module';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  @ViewChild("email") RefEmail!:ElementRef;
  
  queHide:boolean=false;

  UserObj!:User;
  constructor( private HTTP:HttpClient, private ApiUser:UserServiceService, private route:Router) { }

  ngOnInit(): void {
  }

  forgotpass()
  {
    const FUsername=this.RefEmail.nativeElement.value;
    if(FUsername!="")
    {
      this.ApiUser.ForgotPass(FUsername).subscribe(
        (GotUser)=>
        {
          if(GotUser!=null)
          {
            this.UserObj=GotUser;
            this.queHide=true;
          }
          else
          {
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: 'Wrong Email!',
              showConfirmButton: false,
              timer: 1500
            })
          }
        }
      )
    }
    else
    {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Email cannot be Empty!',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }
}
