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

  UserOnj!:User
  public loggedIn = new BehaviorSubject<boolean>(false); // {1}
  public signin = new BehaviorSubject<boolean>(false);

  private LoginStatus = JSON.parse(sessionStorage.getItem('LogedIn')||'false')

  get isLoggedIn() {
    // return this.loggedIn.asObservable(); // {2}
    return JSON.parse(localStorage.getItem('LoggedIn') || this.LoginStatus.toString());

  }
  get isSignup()
  {
    return this.signin.asObservable();
  }
  public getUser = new BehaviorSubject<User>(this.UserOnj); // {1}

  
  get isUser() {
    return this.getUser.asObservable(); // {2}
  }

 
  constructor( private router: Router , private UserApi:UserServiceService) { }
  
  
  login(user: User){
    
    if(user.email!="" && user.password!="")
    {
      
      this.UserApi.CheckUser(user.email,user.password).subscribe(
        {
          next:(check)=>{
            console.log(check);
            if(check!=null)
            {
              this.loggedIn.next(true);
              this.getUser.next(check);

              sessionStorage.setItem('LogedIn','true')
              this.router.navigate(['Home']);
                
            }
            else
            {
              Swal.fire({
                icon: 'error',
                title: 'Wrong',
                text: 'Wrong Credential!',
          
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
  
      })
    }
  }

  logout() {                            // {4}
    // this.loggedIn.next(false);
    sessionStorage.setItem('LogedIn','false')
    this.router.navigate(['']);
  }


  signup(user: User)
  {
    if(user!=null)
    {
      this.signin.next(true);
      
    }
  }
}
