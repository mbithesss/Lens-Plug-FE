import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersHomeComponent } from './orders-home/orders-home.component';
import { OrdersComponent } from './orders.component';
import { SharedModule } from '../shared/shared.module';
import { OrdersRoutingModule } from './orders-routing.module';
import { OpenOrdersComponent } from './open-orders/open-orders.component';
import { ClosedOrdersComponent } from './closed-orders/closed-orders.component';

@NgModule({
  declarations: [
    OrdersComponent,
    OrdersHomeComponent,
    OpenOrdersComponent,
    ClosedOrdersComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
