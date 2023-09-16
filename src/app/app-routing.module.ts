import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'home',
    canActivate: [],
    loadChildren: ()=> import('./landing/landing.module').then((m)=>m.LandingModule)
  },

  {
    path: 'auth',
    canActivate: [],
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },

  {
    path: 'shop',
    canActivate: [],
    loadChildren: () => import('./shop/shop.module').then((m) => m.ShopModule),
  },

  {
    path: 'cart',
    canActivate: [],
    loadChildren: () => import('./cart/cart.module').then((m) => m.CartModule),
  },

  {
    path: 'search',
    canActivate: [],
    loadChildren: () => import('./search/search.module').then((m) => m.SearchModule),
  },

  {
    path: 'orders',
    canActivate: [],
    loadChildren: () => import('./orders/orders.module').then((m) => m.OrdersModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }