import { Component } from '@angular/core';
import TasksService from './tasks.service';
import Task from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks = [];
  private editTaskMode = false;
  private currentTask: Task = null;

  constructor(private tasksService: TasksService) {
    const tasks$ = this.tasksService.get();

    tasks$.subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  addTaskClick() {
    this.editTaskMode = true;
  }

  onItemClick(task: Task) {
    this.currentTask = task;
    this.editTaskMode = true;
  }
}
