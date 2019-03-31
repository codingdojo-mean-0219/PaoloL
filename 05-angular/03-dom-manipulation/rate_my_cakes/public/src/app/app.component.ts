import { Cake } from './cake';
import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  greet = 'My Cakes';
  cakes: any;
  showing: any;
  newCake = new Cake();
  update: any;
  ratedCake: any;

  constructor(private _httpService: HttpService) {}
  ngOnInit() {
    this.getCakesFromService();
    this.newCake = { title: '', description: '' };
  }

  showCake(obj: object): void {
    console.log(`Click event is working with cake id: ${obj}`);
    this.showing = obj;
    this.update = '';
  }

  updateCake(obj: Object): void {
    this.update = obj;
    this.showing = '';
  }

  onshowAll() {
    console.log('showing all');
    this.getCakesFromService();
  }

  onSubmit() {
    this._httpService.postCakes(this.newCake).subscribe(data => {
      this.cakes = data;
    });
    this.newCake = { title: '', description: '' };
  }

  onUpdate() {
    this._httpService.putCakes(this.update.id, this.update).subscribe(data => {
      this.update = '';
      this.showing = data;
    });
    this.getCakesFromService();
  }

  onClear() {
    this.showing = '';
  }

  onDelete(id) {
    this._httpService.getCake(id).subscribe(data => {
      this.showing = data;
      console.log(this.showing, ' show this cake');
    });
    this._httpService.getCakes();
  }

  getCakesFromService() {
    let observable = this._httpService.getCakes();
    observable.subscribe(data => {
      console.log('Got our cakes!', data);
      this.cakes = data;
      console.log(this.cakes);
    });
  }

  rateCake(id) {
    console.log('Called rateCake ');
    console.log(this.ratedCake);
    console.log('Stars :' + this.ratedCake.stars);
    console.log('Id :' + id);
    console.log('Stars :' + this.ratedCake.comment);

    this.ratedCake = {
      stars: this.ratedCake.stars,
      comment: this.ratedCake.comment,
    };
    this._httpService.rateCakes(this.ratedCake).subscribe(data => {
      this, (this.ratedCake = data);
    });
  }
}
