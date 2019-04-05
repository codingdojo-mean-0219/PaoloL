import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../product';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css'],
})
export class AllComponent implements OnInit {
  products: Array<Product> = [];

  constructor(private _service: DataService) {}

  ngOnInit() {
    this._service.products.subscribe(data => {
      this.products = data;
    });
  }

  destroy = (product: Product): void => {
    this._service.destroy(product);
  };
}
