import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search.component';
import { HomeSearchComponent } from './home-search/home-search.component';
import { ByBrandComponent } from './by-brand/by-brand.component';
import { ByCategoryComponent } from './by-category/by-category.component';

const routes: Routes = [
  {
    path: '',
    component: SearchComponent,
    children: [
        {path:"",component: HomeSearchComponent},
        {path:"by-brand",component: ByBrandComponent},
        {path:"by-category",component: ByCategoryComponent},
      ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchRoutingModule {}