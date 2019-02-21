import { SidebarModule } from './../sidebar/sidebar.module';
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
import { RouterModule, PreloadAllModules } from '@angular/router';
@NgModule({
    declarations:[
        ExpenseComponent,
        ExpenseListComponent,
        ExpensesComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        SidebarModule,
        RouterModule
    ],
    exports:[

    ],
    providers:[ExpenseService]
})
export class ExpenseModule{

}