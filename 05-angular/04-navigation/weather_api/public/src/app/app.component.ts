import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Weather API';
  weather;
  temp;
  high;
  low;
  avg;
  status;
  humidity;
  check = false;
  city = '';

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
    });
  }
  goHome() {
    this._router.navigate(['/home']);
  }
}
