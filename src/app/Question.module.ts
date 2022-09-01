export class Question
{
    public id:number;
    public question:string;

    constructor(Id:number, ques:string)
    {
        this.id = Id;
        this.question = ques;
    }
}