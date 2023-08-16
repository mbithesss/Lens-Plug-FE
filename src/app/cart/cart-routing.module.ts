import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-cart/home.component';
import { CartComponent } from './cart.component';

const routes: Routes = [
  {
    path: '',
    component:CartComponent,
    children: [
        {path:"",component: HomeComponent},
      ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartRoutingModule {}