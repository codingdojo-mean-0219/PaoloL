import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  product: Product = new Product();

  constructor(private _service: DataService, private _router: Router) {}

  ngOnInit() {}

  create = (event: Event): void => {
    event.preventDefault();
    this._service.add(this.product);
    this._router.navigate(['all']);
  };
}
