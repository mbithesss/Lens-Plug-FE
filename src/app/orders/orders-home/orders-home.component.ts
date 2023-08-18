import { Component } from '@angular/core';

@Component({
  selector: 'app-orders-home',
  templateUrl: './orders-home.component.html',
  styleUrls: ['./orders-home.component.css']
})
export class OrdersHomeComponent {
    activatedTabIndex: any = 0;
    tabs: string[] = ['Open Orders (2)', 'Closed Orders'];  
    tabChange(tabIndex: any) {
      // This function works to enable switch contents during switching the tabs.
      this.activatedTabIndex = tabIndex;
    }
  }
