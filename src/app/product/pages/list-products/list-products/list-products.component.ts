import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product/interfaces/product.interface';
import { ProductService } from 'src/app/product/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css' ]
})
export class ListProductsComponent implements OnInit {
  activeCategory: string = "";
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
    ) { }
  ngOnInit(): void {
    console.log("ListProductsComponent");
    // this.productService.getProduct()
    // .subscribe({
    //   next: products =>{
    //       this.products =  products
    //   },
    //   });

    //   this.productService.getProductByName(this.activeCategory).subscribe((data)=>{
    //     this.products = data
    //   });
    this.route.url.subscribe((data)=>{
      console.log(data[0].path);
      this.activeCategory = data[0].path;
    }); // UrlSegment[]

    if(this.activeCategory === "list" || this.activeCategory === ""){
      this.productService.getProduct()
    .subscribe({
      next: products =>{
          this.products =  products
      },
    });
    }
    this.productService.getProductByName(this.activeCategory).subscribe((data)=>{
      this.products = data
    })
  }


  getProductByName(name:string){
    this.productService.getProductByName(name)
    .subscribe({
      next: products =>{
        console.log(products, "AAAAAA");
        this.products = products;
      },
      error: err => console.log(err)
    });
  }

  filterProducts(category: string, products: Product[]){
    console.log(category, "BBBBBB");
    return products.filter((product: Product) => product.name.value === category);
  }
}
