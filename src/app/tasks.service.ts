import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import Task from './task';

@Injectable({
  providedIn: 'root'
})
export default class TasksService {
  // TODO: clear it
  tasks: Task[] = [
    new Task('some title'),
    new Task('other title'),
    new Task('very very very long titleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'),
  ];
  tasks$: BehaviorSubject<Task[]>;

  constructor() {
    this.tasks$ = new BehaviorSubject<Task[]>(this.tasks);
  }

  private update() {
    this.tasks$.next(this.tasks);
  }

  add(task: Task) {
    this.tasks.push(task);
    this.update();
  }

  remove(task: Task) {
    const index = this.tasks.findIndex(t => t.id === task.id);
    this.tasks.splice(index, 1);
    this.update();
  }

  get() {
    return this.tasks$;
  }
}
