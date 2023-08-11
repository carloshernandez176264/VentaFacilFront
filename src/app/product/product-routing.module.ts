import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductsComponent } from './pages/list-products/list-products/list-products.component';
import { LayoutPagesComponent } from './pages/layout-pages/layout-pages.component';
import { NewPagesComponent } from './pages/new-pages/new-pages.component';
import { CartComponent } from './components/cart/cart/cart.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { CategoryComponent } from './pages/category/category.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path:'',
    component: LayoutPagesComponent,
    children:[
      {path:'new', component: NewPagesComponent},
      {path:'search', component: ListProductsComponent},
      {path:'edit/:id', component: NewPagesComponent},
      {path:'list', component: ListProductsComponent},
      {path:'category/:name', component: ListProductsComponent},
      {path: 'cart', component: CartComponent},
      {path: 'card/:id', component: ProductDetailComponent},
      { path: '**', redirectTo: 'list' },
    ]
  },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]

})
export class ProductRoutingModule { }
