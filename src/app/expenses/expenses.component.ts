import { ExpenseService } from './expenses.service';
import { Expense } from './expense.model';
import { AuthService } from './../auth/auth.service';
import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {
  user: any = {};
  private userSubscription: Subscription;
  private expenseMap: Map<String,Map<String,Expense>>;
  constructor(private authService: AuthService, private expenseService: ExpenseService) {}

  ngOnInit() {
    this.expenseService.getExpenses();
    this.authService.me().subscribe(data => {
      if(data.user){
        this.user = data.user;
      }
  });
}
  ngOnDestroy(){

  }

  exportCSV(){
    
  }
}
