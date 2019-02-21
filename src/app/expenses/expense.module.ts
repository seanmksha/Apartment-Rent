import { AppModule } from './../app.module';
import { SidebarComponent } from './../sidebar/sidebar.component';
import { ExpensesComponent } from './expenses.component';
import { ExpenseService } from './expenses.service';
import { ExpenseComponent } from './expense/expense.component';
import { Expense } from "./expense.model";
import { FormsModule } from '@angular/forms';

import {CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { ExpenseListComponent } from './expense-list/expense-list.component';
@NgModule({
    declarations:[
        ExpenseComponent,
        ExpenseListComponent
    ],
    imports:[
        CommonModule,
        FormsModule
    ],
    providers:[ExpenseService]
})
export class ExpenseModule{

}