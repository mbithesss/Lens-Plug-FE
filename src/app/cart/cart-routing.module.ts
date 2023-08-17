import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-cart/home.component';
import { CartComponent } from './cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {
    path: '',
    component:CartComponent,
    children: [
        {path:"",component: HomeComponent},
        {path:"checkout",component: CheckoutComponent},
        {path:"payment",component: PaymentComponent},
      ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartRoutingModule {}