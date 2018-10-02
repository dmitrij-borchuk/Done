import { Component, OnInit } from '@angular/core';
import TasksService from '../tasks.service';
import Task from '../task';

@Component({
  selector: 'app-new-task-form',
  templateUrl: './new-task-form.component.html',
  styleUrls: ['./new-task-form.component.css']
})
export class NewTaskFormComponent {
  constructor(private tasksService: TasksService) {
  }

  onEnter(title) {
    this.tasksService.add(new Task(title));
  }
}
