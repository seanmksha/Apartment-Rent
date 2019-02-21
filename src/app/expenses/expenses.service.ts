//import ErrorService
import { Expense } from "./expense.model";
import {Http, Response, Headers} from "@angular/http";
import {Injectable, EventEmitter} from "@angular/core";
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class ExpenseService{
    private expenseMap: Map<String,Map<String,Expense>>;
    constructor(
        private http:Http){

        }

    getExpenses(){
        //return this.http.get('http://localhost:3001/api/expense');
    }
    get getExpenseMap():Map<String,Map<String,Expense>>{
        return this.expenseMap;
    }
    add(expense:Expense){
        let expenses= new Map<String,Expense>();
        if(this.expenseMap.has(expense.category)){
            expenses = this.expenseMap.get(expense.category);
        }
        expenses.set(expense.expenseId,expense);
        this.expenseMap.set(expense.category,expenses);

    }
    clear(){
        
    }
}