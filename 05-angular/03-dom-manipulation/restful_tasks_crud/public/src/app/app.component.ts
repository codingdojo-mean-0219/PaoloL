import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  greet = 'My Tasks';
  tasks: any;
  showing: any;
  newTask: any;
  update: any;

  constructor(private _httpService: HttpService) {}
  ngOnInit() {
    this.getTasksFromService();
    this.newTask = { title: '', description: '' };
  }
  showTask(obj: object): void {
    console.log(`Showing Task ID: ${obj}`);
    this.showing = obj;
    this.update = '';
  }

  updateTask(obj: Object): void {
    this.update = obj;
    this.showing = '';
  }

  onshowAll() {
    console.log('showing all');
    this.getTasksFromService();
  }

  onSubmit() {
    this.postTasksFromService(this.newTask);
    this.newTask = { title: '', description: '' };
  }

  onUpdate() {
    this.updateTaskFromService(this.update);
  }
  onClear() {
    this.showing = '';
  }
  onDelete(id) {
    console.log(id, 'ID');

    this.deleteTaskFromService(id);
    this.showing = '';
  }
  getTasksFromService() {
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log('Got the tasks!', data);
      this.tasks = data;
      console.log(this.tasks);
    });
  }
  getTaskFromService(id) {
    let observable = this._httpService.getTask(id);
    observable.subscribe(data => {
      this.showing = data;
      console.log(this.showing, ' ITS WORKING');
    });
  }
  postTasksFromService(data) {
    let observable = this._httpService.postTasks(data);
    observable.subscribe(data => {
      this.tasks = data;
      this.getTasksFromService();
    });
  }
  deleteTaskFromService(id) {
    console.log(id, ' is the id');
    let observable = this._httpService.deleteTask(id);
    observable.subscribe(data => {
      this.showing = '';
      this.getTasksFromService();
    });
  }
  updateTaskFromService(data) {
    let id = data._id;
    let observable = this._httpService.putTasks(id, data);
    observable.subscribe(data => {
      this.update = '';
      this.getTasksFromService();
    });
    this.showing = data;
  }
}
