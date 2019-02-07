import { AuthService } from './../auth/auth.service';
import { Component, OnInit, Input , ChangeDetectorRef,  OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import {MediaMatcher} from '@angular/cdk/layout';
import { navLink } from './../models/navLink';
@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
  })
  export class SidebarComponent implements OnInit, OnDestroy {
    
    mobileQuery : MediaQueryList;
    @Input() user: any = {};
    private userSubscription: Subscription;
    private _mobileQueryListener: () => void;

    items = [
        new navLink('Home',''),
        new navLink('Settings','Settings'),
        new navLink('Rent','Rent'),
        new navLink('Expenses','Expenses')
    ];

    items2 = [
        new navLink('Account','Account'),
        new navLink('Pay Rent','Pay-Rents')
    ];


    constructor(private authService: AuthService,
        private router: Router, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
            this.mobileQuery = media.matchMedia('(max-width: 600px');
            this._mobileQueryListener = () => changeDetectorRef.detectChanges();
            this.mobileQuery.addListener(this._mobileQueryListener);
        }
  
    ngOnInit() {
        
      
    }
    ngOnDestroy():void{
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }

  }
  