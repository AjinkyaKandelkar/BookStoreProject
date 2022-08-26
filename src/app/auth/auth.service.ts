import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import Swal from 'sweetalert2';
import { UserServiceService } from '../user-service.service';
import { User } from '../User.module';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loggedIn = new BehaviorSubject<boolean>(false); // {1}

  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }
  constructor( private router: Router , private UserApi:UserServiceService) { }
  login(user: User){
    // if (user.email !== '' && user.password !== '' ) 
    // { 
    //   this.loggedIn.next(true);
    //   this.router.navigate(['/']);
    // }
   

    if(user.email!="" && user.password!="")
    {
      
      this.UserApi.CheckUser(user.email,user.password).subscribe(
        {
          next:(check)=>{
       
            if(check)
            {
              this.loggedIn.next(true);
      // this.router.navigate(['/']);
              
              this.router.navigate(['Home'])
                
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

  logout() {                            // {4}
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
