import { AuthService } from './../auth/auth.service';
import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpenseComponent implements OnInit {
  user: any = {};
  private userSubscription: Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit() {
  this.authService.me().subscribe(data => {
    if(data.user){
      this.user = data.user;
    }
  });
}
  ngOnDestroy(){

  }
}
