import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseLayoutComponent } from '../components/base-layout/base-layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { Nav2Component } from './nav2/nav2.component';
import { NextPageComponent } from './next-page/next-page.component';
import { SlidableTabComponent } from './slidable-tab/slidable-tab.component';


@NgModule({
  declarations: [
    BaseLayoutComponent,
    NavbarComponent,
    FooterComponent,
    Nav2Component,
    NextPageComponent,
    SlidableTabComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    BaseLayoutComponent,
    NavbarComponent,
    FooterComponent,
    Nav2Component,
    NextPageComponent,
    SlidableTabComponent

  ]
})
export class SharedModule { }