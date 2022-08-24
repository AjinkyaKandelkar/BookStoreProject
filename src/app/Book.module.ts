export class Book
{
    public id:number;
    public isbn:string;
    public bookname:string;
    public imgpath:string;
    public author:string;
    public price:number;
    public pages:number;
    public description:string;

    constructor(id:number, isbn:string, nm:string,imgpath:string, author:string,price:number,pages:number,desc:string)
    {   
        this.id=id;
        this.isbn=isbn;
        this.bookname=nm;
        this.author=author;
        this.imgpath=imgpath;
        this.price=price;
        this.pages=pages;
        this.description=desc;
    }
}