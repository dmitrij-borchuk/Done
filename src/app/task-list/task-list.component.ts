import { Component, OnInit } from '@angular/core';
import shortid from 'shortid';

class Task {
  id: string;
  constructor(public title: string) {
    this.id = shortid.generate();
  }
}

console.log('=-= Task', Task);

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  constructor() { }

  items = [
    new Task('some title'),
    new Task('other title'),
    new Task('very very very long titleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'),
  ];

  ngOnInit() {
  }

  trackByFn(index, item) {
    return item.id;
  }

}
