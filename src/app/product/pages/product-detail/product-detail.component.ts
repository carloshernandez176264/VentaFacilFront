import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { ProductService } from '../../services/product.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

  @Input() public product!: Product;


  constructor(
    public fb: FormBuilder,
    private productService:ProductService,
    private activatedRouter: ActivatedRoute
    ){}

    ngOnInit(): void {
      this.activatedRouter.params.subscribe(({id})=>{
        this.productService.getProductById(id).subscribe((product)=>{
          console.log(product.photo, "CAAAAAAAAAARD")
          this.product = product;
        })
      })
    }




}
