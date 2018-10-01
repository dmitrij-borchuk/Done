import { Component, OnInit, Input } from '@angular/core';
import Task from '../task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  @Input() items: Task[];

  constructor() { }

  ngOnInit() {
  }

  trackByFn(index, item) {
    return item.id;
  }

}
