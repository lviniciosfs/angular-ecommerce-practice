import { Component, inject, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { ProductsService } from './products.service';
import { AsyncPipe } from '@angular/common';
import {
  map,
  Observable,
  of,
  switchMap,
  from,
  BehaviorSubject,
  combineLatest,
} from 'rxjs';

@Component({
  selector: 'app-products',
  imports: [AsyncPipe],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  productService = inject(ProductsService);
  page = new BehaviorSubject(10);
  limit = new BehaviorSubject(10);

  products$ = combineLatest([this.page, this.limit]).pipe(
    switchMap(() =>
      this.productService.getProducts(this.limit.value, this.page.value)
    )
  );

  onSelect(event: any) {
    this.limit.next(event.target.value);
  }

  next() {
    this.page.next(this.page.value + 10);
  }
}
