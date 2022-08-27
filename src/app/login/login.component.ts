import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IsActiveMatchOptions, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../auth/auth.service';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  form!:FormGroup;
  private formSubmitAttempt!: boolean;

  email:string="";
  pass:string="";
  public checkcredit:any;
  
  constructor( private UserApi:UserServiceService,private rote:Router,  private fb: FormBuilder, private authService: AuthService ) { }

  ngOnInit(): void {
    this.form = this.fb.group({     
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  isFieldInvalid(field: string) { // {6}
    return (
      (!this.form.get(field)?.valid && this.form.get(field)?.touched) ||
      (this.form.get(field)?.untouched && this.formSubmitAttempt)
    );
  }




  checkcredential()
  {
    this.form = this.fb.group({     
      email: [this.email, Validators.required],
      password: [this.pass, Validators.required]
    });
   
    this.authService.login(this.form.value);
    this.formSubmitAttempt = true; 
    
  }

}
