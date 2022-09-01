import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Question } from '../Question.module';
import { UserServiceService } from '../user-service.service';
import { User } from '../User.module';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  questionlist!:Question[];
  anslist!: string[];
  constructor(private HTTP:HttpClient, private UserApi:UserServiceService) { }

  @ViewChild('id') ReFID!:ElementRef
  ngOnInit(): void {
    this.UserApi.UserQues().subscribe(
     {
       next:(getQues)=>
       {
          this.questionlist=getQues;
       }
    } 
      
    )
      
  }
  chechques(num :number)
  {
    console.log(num)

  }

  getvalue()
  {
    
  }

}
