import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private _http: HttpClient) {
    this.getCakes();
  }

  getCakes() {
    return this._http.get('/cakes');
  }

  postCakes(cake) {
    return this._http.post('/cakes', cake);
  }

  getCake(id) {
    return this._http.get('/cakes/' + id);
  }

  putCakes(id, cake) {
    return this._http.put('/cakes/' + id, cake);
  }

  deleteCake(id) {
    return this._http.delete('/cakes/' + id);
  }
  rateCakes(cake) {
    return this._http.post('/cakes/' + cake.id, cake);
  }
}
