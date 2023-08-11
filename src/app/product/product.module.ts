import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { ProductRoutingModule } from './product-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListProductsComponent } from './pages/list-products/list-products/list-products.component';
import { LayoutPagesComponent } from './pages/layout-pages/layout-pages.component';
import { NewPagesComponent } from './pages/new-pages/new-pages.component';
import { SearchPagesComponent } from './pages/search-pages/search-pages.component';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { ProductService } from './services/product.service';
import { CartComponent } from './components/cart/cart/cart.component';
import { ModalComponent } from './components/modal/modal/modal.component';
import { PurchaseModalComponent } from './components/purchase-modal/purchase-modal.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { CategoryComponent } from './pages/category/category.component';



@NgModule({
  declarations: [
    CardComponent,
    ListProductsComponent,
    LayoutPagesComponent,
    NewPagesComponent,
    SearchPagesComponent,
    HomePagesComponent,
    CartComponent,
    ModalComponent,
    PurchaseModalComponent,
    ProductDetailComponent,
    CategoryComponent,


  ],
  imports: [
    CommonModule,
    // ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule,


  ],
  providers:[
    ProductService
  ]

})
export class ProductModule {

}
