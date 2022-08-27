import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { User } from '../User.module';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  UserObj!:User;
  Bdate!:string;
  constructor( private UserApi:UserServiceService,private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (parameter)=>{
        this.UserApi.FindUser(parameter['id']).subscribe(
          (gotuser)=>{
            this.UserObj=gotuser;
            this.Bdate=(this.UserObj.date).substr(0,10) 
          }
        )
      }
    )
  }

  updateUser()
  {
    console.log(this.UserObj);
    this.UserApi.EditUser(this.UserObj).subscribe(
      (check)=>{ console.log(check); }
    );
  }
}
