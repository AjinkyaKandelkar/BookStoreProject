import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AnswerServiceService } from '../answer-service.service';
import { Question } from '../Question.module';
import { UserServiceService } from '../user-service.service';
import { User } from '../User.module';
import { Answerclass } from './AnswerClass';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {


  questionlist!:Question[];
  StringArray:string[]=[];
  AnswerArray:Answerclass[]=[];
  SingleAnsObj!:Answerclass;
  UserObj!:User;
  @Input() InputDecorator!:User;
  constructor(private HTTP:HttpClient, private UserApi:UserServiceService, private AnsUrl:AnswerServiceService, private route:Router) { }

  ngOnInit(): void {
    this.UserApi.UserQues().subscribe(
      {
        next:(getQues)=>
        {
           this.questionlist=getQues;
        }
     });

    this.AnsUrl.getUserAns(this.InputDecorator.id).subscribe(
      {
        next:(getAns)=>
        {
          this.AnswerArray=getAns;
        }
      }
    );
  }
  
  chechques(f:string,s:string,t:string,fo:string)
  {
    this.StringArray.push(f);
    this.StringArray.push(s);
    this.StringArray.push(t);
    this.StringArray.push(fo);

    for(var x in this.AnswerArray)
    {

      
      // console.log(this.AnswerArray[x].answer + " = "+ this.StringArray[x])
      if(this.AnswerArray[x].answer == this.StringArray[x])
      {
          this.route.navigate(["Home"]);
      }
      else{
        console.log("Not Matched")
      }
    }
  }
}