//import ErrorService
import { Expense } from "./expense.model";
import {Http, Response, Headers} from "@angular/http";
import {Injectable, EventEmitter} from "@angular/core";
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class ExpenseService{
    private expenses: Expense[]=[];
    constructor(
        private http:Http){

        }

    add(expense:Expense){
        this.expenses.push(expense);
    }
    clear(){
        this.expenses=[];
    }
}