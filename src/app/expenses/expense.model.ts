export class Expense{
    title:string;
    description: string;
    category: string;
    date: Date;
    checkNumber: String;
    amount: Number;
    expenseId: string;
    userId?: string;

    constructor(title:string, description:string, category:string, date:Date, checkNumber:String, amount:Number,expenseId?:string,userId?:string){
        this.title=title;
        this.description=description;
        this.category = category;
        this.date = date;
        this. checkNumber = checkNumber;
        this.amount = amount;
        this.expenseId=expenseId;
        this.userId=userId;
    }
}