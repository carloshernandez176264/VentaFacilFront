import { Component, Input } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product.interface';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  @Input() product!: Product;

  constructor(
    private productService: ProductService,
    private activatedRouter: ActivatedRoute,
    private cartService: CartService
  ){}

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(({name})=>{
      this.productService.getProductByName(name).subscribe((product)=>{
        console.log(product, "CAAAAAAAAAARD")
        product = product;
      })
    })
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
