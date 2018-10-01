import { Injectable } from '@angular/core';
import Task from './task';

@Injectable({
  providedIn: 'root'
})
export default class TasksService {
  tasks: Task[] = [
    new Task('some title'),
    new Task('other title'),
    new Task('very very very long titleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'),
  ];

  constructor() { }

  add(task: Task) {
    this.tasks.push(task);
  }

  remove(task: Task) {
    const index = this.tasks.findIndex(t => t.id === task.id);
    this.tasks.splice(index, 1);
  }

  get() {
    return this.tasks;
  }
}
