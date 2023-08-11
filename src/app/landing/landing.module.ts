import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { LandingRoutingModule } from './landing-routing.module';
import { AuthModule } from '../auth/auth.module';



@NgModule({
  declarations: [
    LandingComponent,
    HomeComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    LandingRoutingModule,
    AuthModule,
  
  ]
})
export class LandingModule { }
