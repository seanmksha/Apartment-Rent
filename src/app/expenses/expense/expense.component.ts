import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ExpenseService} from "./../expenses.service";
import {Expense} from "./../expense.model";
@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent implements OnInit {
   /**
   * Returns the average of two numbers.
   *
   *
   * @param x - The first input number
   * @param y - The second input number
   * @returns The arithmetic mean of `x` and `y`
   *
   * @beta
   */


  @Input() expense: Expense;
  constructor(private expenseService: ExpenseService) { 

  }

  ngOnInit() {
  }

}
