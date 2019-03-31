import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Restful Tasks';
  tasks: any;
  showing: any;
  showAll: any;

  showTask(obj: object): void {
    console.log(`this works if it shows the task: ${obj}`);
    this.showing = obj;
  }

  constructor(private _httpService: HttpService) {}
  ngOnInit() {}
  onshowAll() {
    console.log('showing all tasks');
    this.getTasksFromService();
  }
  getTasksFromService() {
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      this.tasks = data;
      console.log(data);
      console.log(this.tasks, ' = ITS WORKING!');
      this.showAll = true;
    });
  }
}
