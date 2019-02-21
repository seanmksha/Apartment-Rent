import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ExpenseService} from "./../expenses.service";
import {Expense} from "./../expense.model";
import { ExpenseComponent } from './../expense/expense.component';
@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss']
})
export class ExpenseListComponent implements OnInit {
  @Input() expenses:Map<String,Expense>;
  @Input() category;

  constructor(private expenseService: ExpenseService) { 

  }

  ngOnInit() {
   
  }
  editExpense(){

  }
  deleteExpense(){
    
  }
}
