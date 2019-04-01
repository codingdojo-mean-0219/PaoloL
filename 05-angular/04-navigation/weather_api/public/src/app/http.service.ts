import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private _http: HttpClient) {}
  getWeather(city) {
    return this._http
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=13b6e44dcae6d4740619b1e1a46c44ef`
      )
      .toPromise();
  }
}
