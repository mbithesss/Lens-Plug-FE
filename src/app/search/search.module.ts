import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SharedModule } from '../shared/shared.module';
import { HomeSearchComponent } from './home-search/home-search.component';
import { ByCategoryComponent } from './by-category/by-category.component';
import { ByBrandComponent } from './by-brand/by-brand.component';
import { SearchRoutingModule } from './search-routing.module';
import { AuthModule } from '../auth/auth.module';



@NgModule({
  declarations: [
    SearchComponent,
    HomeSearchComponent,
    ByCategoryComponent,
    ByBrandComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SearchRoutingModule,
    AuthModule,
    
  ]
})
export class SearchModule { }
