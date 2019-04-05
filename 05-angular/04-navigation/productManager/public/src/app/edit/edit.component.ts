import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  product: Product;

  constructor(
    private _service: DataService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this._route.paramMap.subscribe(params => {
      this.product = this._service.getProduct(Number(params.get('id')));
    });
  }

  ngOnInit() {}

  update(event: Event): void {
    event.preventDefault();
    this._service.updateProduct(this.product);
    this._router.navigate(['all']);
  }

  destroy(): void {
    this._service.destroy(this.product);
    this._router.navigate(['all']);
  }
}
