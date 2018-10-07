import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import shortid from 'shortid';
import Task from './task';

@Injectable({
  providedIn: 'root'
})
export default class TasksService {
  // TODO: clear it
  tasks: Task[] = [
    new Task({
      id: shortid.generate(),
      title: 'some title',
    }),
    new Task({
      id: shortid.generate(),
      title: 'other title',
    }),
    new Task({
      id: shortid.generate(),
      title: 'very very very long titleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    }),
  ];
  tasks$: BehaviorSubject<Task[]>;

  constructor() {
    this.tasks$ = new BehaviorSubject<Task[]>(this.tasks);
  }

  private notify() {
    this.tasks$.next(this.tasks);
  }

  add(task: Task) {
    this.tasks.push(task);
    this.notify();
  }

  edit(task: Task) {
    const taskForEdit = this.tasks.find(t => t.id === task.id);

    if (!taskForEdit) {
      throw new Error('Task not found');
    }

    Object.assign(taskForEdit, task);
    this.notify();
  }

  remove(task: Task) {
    const index = this.tasks.findIndex(t => t.id === task.id);
    this.tasks.splice(index, 1);
    this.notify();
  }

  get() {
    return this.tasks$;
  }
}
