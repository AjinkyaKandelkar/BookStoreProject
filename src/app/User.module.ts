export class User
{
    public id:number ;
    public firstname:string;
    public lastname:string;
    public gender:string;
    public date:any;
    public email:string;
    public password:string;
    public state:string;
    public city:string;
    public pincode:number;
    public address:string;

    constructor(Id:number,fname:string,lname:string,gen:string,date:any,mail:string,pass:string,state:string,city:string,pincode:number,address:string)
    {
        this.id=Id;
        this.firstname=fname;
        this.lastname=lname
        this.gender=gen;
        this.date=date;
        this.email=mail;
        this.password=pass
        this.state=state;
        this.city=city;
        this.pincode=pincode;
        this.address=address;
    }
}
