import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() user: any = {};
  private userSubscription: Subscription;
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    
  }

  logout(): void {
    this.authService.signOut();
    this.navigate('/auth/login');
  }

  navigate(link): void {
    this.router.navigate([link]);
  }

}
