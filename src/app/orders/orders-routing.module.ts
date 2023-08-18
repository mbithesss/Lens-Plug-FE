import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersHomeComponent } from './orders-home/orders-home.component';
import { OrdersComponent } from './orders.component';
import { ClosedOrdersComponent } from './closed-orders/closed-orders.component';
import { OpenOrdersComponent } from './open-orders/open-orders.component';

const routes: Routes = [
  {
    path: '',
    component: OrdersComponent,
    children: [
      {path: '', component: OrdersHomeComponent},
      {path: 'open-orders', component: ClosedOrdersComponent},
      {path: 'closed-orders', component: OpenOrdersComponent},
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {}