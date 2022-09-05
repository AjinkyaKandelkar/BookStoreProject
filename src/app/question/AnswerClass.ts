export class Answerclass
{
   
    public answer:string;
    public queRefId:number;
    public userRefId:number;
    constructor( ansq:string,que:number,user:number)
    {  
        this.answer=ansq; 
        this.queRefId=que;
        this.userRefId=user;
    }
}