import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ExpenseService} from "./../expenses.service";
import {Expense} from "./../expense.model";
@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent implements OnInit {
  @Input() expense: Expense;
  constructor(private expenseService: ExpenseService) { 

  }

  ngOnInit() {

  }
  editExpense(){
    this.expenseService.add(this.expense);
  }
  deleteExpense(){

  }
}
