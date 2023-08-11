import { Component, OnInit,Input } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['card.component.css'
  ]
})
export class CardComponent implements OnInit {

  @Input() public product!: Product;

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    // console.log(this.product, "En Card")
  }

  constructor(private cartService:CartService){}
  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

}
