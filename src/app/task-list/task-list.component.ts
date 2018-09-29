import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  constructor() { }

  items = [{
    id: 'someId',
    title: 'some title',
  }, {
    id: 'someId2',
    title: 'other title',
  }];

  ngOnInit() {
  }

  trackByFn(index, item) {
    return item.id;
  }

}
