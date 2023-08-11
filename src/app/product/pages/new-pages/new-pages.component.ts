import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../interfaces/product.interface';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-new-pages',
  templateUrl: './new-pages.component.html',
  styleUrls: ['./new-pages.component.css']
})
export class NewPagesComponent implements OnInit {

  productForm!: FormGroup;
  product!: Product;

  constructor(
    private productService: ProductService,
    public fb:FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute

  ) {
    this.activatedRoute.params
    .pipe(switchMap(({id}) => this.productService.getProductById(id)))
    .subscribe({
      next: (product)=>{
        console.log(product);
        this.product = product;
        this.productForm.patchValue({
          id: product.id,
          name: product.name,
          price: product.price,
          description: product.description,
          stock: product.stock,
          code: product.code,
          dateRegistry: product.dateRegistry,
          model: product.model,
          brand: product.brand,
          photo: product.photo,
        });
      }
    });
  }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      stock: new FormControl('', [Validators.required]),
      code: new FormControl('', [Validators.required]),
      dateRegistry: new FormControl('', [Validators.required]),
      model: new FormControl('', [Validators.required]),
      brand: new FormControl('', [Validators.required]),
      photo: new FormControl('', [Validators.required]),

    });
  }

  addProduct(product: Product){
    this.productService.createProduct(this.productForm.value).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  get currentProduct():Product{
    const product = this.productForm.value as Product;
    return product;
  }

  onSubmit():void{
    this.productService.createProduct(this.productForm.value)
    .subscribe({
      next:() => {
        if(this.productForm.value.id === this.productForm.value.id){
          this.router.navigate(['/product/list']);
        }
      }
    })
  }

  deleteProduct():void{
    this.productService.deleteProduct(this.productForm.value.id)
    .subscribe({
      next:() => {
        this.router.navigate(['/product/list']);
      }
    })
  }

}
