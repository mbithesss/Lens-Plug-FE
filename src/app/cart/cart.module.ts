import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AuthModule } from '../auth/auth.module';
import { CartRoutingModule } from './cart-routing.module';
import { HomeComponent } from './home-cart/home.component';
import { CartComponent } from './cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [
    CartComponent,
    HomeComponent,
    CheckoutComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CartRoutingModule,
    AuthModule,
  ]
})
export class CartModule { }
