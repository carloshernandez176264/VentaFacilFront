import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Product } from '../interfaces/product.interface';
import { Id } from '../interfaces/Id.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8081/api/products';
  private httpHeaders = new Headers({'Content-Type': 'application/json'});

  product: Product[] = [];


  constructor(private http: HttpClient) { }

  getProduct():Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}`)
    .pipe(map(resp=>{
      console.log(resp);
      return resp;
    }));
  }

  getProductById(id: number):Observable<Product>{
    return this.http.get<Product>(`${this.baseUrl}/${id}`)
    .pipe(map(resp=>{
      console.log(resp);
      return resp;
    }));
  }

  updateProduct(product:Product):Observable<Product>{
    return this.http.put<Product>(`${this.baseUrl}/${product.id}`, product)
    .pipe(map(resp=>{
      console.log(resp);
      return resp;
    }));
  }

  createProduct(product:Product):Observable<Product>{
    return this.http.post<Product>(`${this.baseUrl}`, product)
    .pipe(map(resp=>{
      console.log(resp);
      return resp;
    }));
  }

  deleteProduct(id: number):Observable<Product>{
    return this.http.delete<Product>(`${this.baseUrl}/${id}`)
    .pipe(map(resp=>{
      console.log(resp);
      return resp;
    }));
  }

  getProductByName(name: string):Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}/${name}`)
    .pipe(map(resp=>{
      console.log(resp);
      return resp;
    }));
  }

  filterData(term: string):void{
    const QUERY_BY_NAME ={};
    this.getProductByName(term).subscribe(resp=>{
      this.product = resp;
      console.log(resp);
    });
  }


}

// `${this.baseUrl}/search/findByProductNameContaining?name=${term}`;
