import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  http = inject(HttpClient);

  getProducts(limit: number, skip: number) {
    return this.http
      .get<ProductsResponse>(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=title,price,category`
      )
      .pipe(map((resp) => resp.products));
  }
}
