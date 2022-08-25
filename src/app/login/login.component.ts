import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string="";
  pass:string="";
  public checkcredit:any;
  constructor( private UserApi:UserServiceService,private rote:Router ) { }

  ngOnInit(): void {
    
  }
  checkcredential()
  {
    if(this.username!="" && this.pass!="")
    {
      this.UserApi.CheckUser(this.username,this.pass).subscribe(
        {
          next:(check)=>{
            this.checkcredit=check;
            if(this.checkcredit)
            {
              this.rote.navigate(['Home'])
            }
            else
            {
              Swal.fire({
                icon: 'error',
                title: 'Wrong',
                text: 'Wrong Credential!',
                // footer: '<a href="">Why do I have this issue?</a>'
              })
            }
           
          }
        }
      )
    }
    else
    {
      
      Swal.fire({
        icon: 'error',
        title: 'Empty...',
        text: 'Wrong Credential!',
        // footer: '<a href="">Why do I have this issue?</a>'
      })
    }
  }

}
