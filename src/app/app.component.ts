import { Component } from '@angular/core';
import TasksService from './tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks = [];
  private createTaskMode = false;

  constructor(private tasksService: TasksService) {
    const tasks$ = this.tasksService.get();

    tasks$.subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  addTaskClick() {
    this.createTaskMode = true;
    console.log('=-= this.tasksService', this.tasksService);
    console.log('=-= addTaskClick');
  }
}
