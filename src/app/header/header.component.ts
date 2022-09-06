import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from '../auth/auth.service';
import { User } from '../User.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn$!: Observable<boolean>;    
  isSignup$!: Observable<boolean>;
  LoginIs:boolean=false;
  UserObj$!: Observable<User>;   
  name!:User;          
  constructor(private authService: AuthService, private route:Router) { 
    
  }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn; 
    this.LoginIs=this.authService.isLoggedIn;
    this.isSignup$=this.authService.isSignup;
    this.UserObj$=this.authService.isUser; 
    this.showuser()
  }

  onLogout(){
    this.authService.logout(); 
    sessionStorage.setItem('LoginIs','false');                    
  }

  showuser()
  {
    
      this.UserObj$.subscribe((value: any) => {
          let jobs: any = value;
          this.name=jobs;
      });
    
  }

}
