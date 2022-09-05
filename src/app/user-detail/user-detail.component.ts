import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AnswerServiceService } from '../answer-service.service';
import { Question } from '../Question.module';
import { Answerclass } from '../question/AnswerClass';
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
  questionlist!:Question[];
  SingleAnsObj!:Answerclass;
  ArrayAns!:Answerclass[];
  ansArray:string[]=[];

  disabledInput:boolean=true;
  constructor( private UserApi:UserServiceService,private router:Router, private route: ActivatedRoute, private AnsUrl:AnswerServiceService) { }

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
    this.UserApi.UserQues().subscribe(
      {
        next:(getQue)=>{
          this.questionlist=getQue;
        }
      }
    );

  }
  cancelEdit()
  {
    this.disabledInput==true;
    console.log(this.disabledInput)
  }

  changeDisabled()
  {
    if(this.disabledInput==true)
    {
      this.disabledInput=false;
    }
    else
    {
      this.disabledInput=false;
    }
  }

  updateUser()
  {
    console.log(this.UserObj);
    this.UserApi.EditUser(this.UserObj).subscribe(
      (check)=>{ console.log(check); }
    );
  }

  // showans()
  // {
  //   this.AnsUrl.getUserAns(this.UserObj.id).subscribe(
  //     {
  //       next:(getAns)=>{
  //         this.ArrayAns=getAns
  //       }
  //     }
  //   )
  // }

  addSequrity(first:string, second:string,third:string, forth:string)
  {
    this.ansArray.push(first);
    this.ansArray.push(second);
    this.ansArray.push(third);
    this.ansArray.push(forth);
    for(var x in this.ansArray)
    {
      this.SingleAnsObj= new Answerclass(this.ansArray[x],Number(x)+1,this.UserObj.id);
      console.log(this.SingleAnsObj);

      this.AnsUrl.PostAnswers(this.SingleAnsObj).subscribe(
        (PAns)=>{ console.log(PAns); }
      )
    }
  }

  
}
