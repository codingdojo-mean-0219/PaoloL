import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';
import { Cake } from './../cake';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.css'],
})
export class CakeComponent implements OnInit {
  constructor(private _httpService: HttpService) {}

  ngOnInit() {}
}
