import {
  Component,
  Input,
  OnChanges,
} from '@angular/core';
import shortid from 'shortid';
import TasksService from '../tasks.service';
import Task from '../task';

@Component({
  selector: 'app-new-task-form',
  templateUrl: './new-task-form.component.html',
  styleUrls: ['./new-task-form.component.css']
})
export class NewTaskFormComponent implements OnChanges {
  @Input() data: Task;
  private model: Task;

  constructor(private tasksService: TasksService) {}

  ngOnChanges() {
    this.model = new Task(this.data);
  }

  onEnter(title) {
    if (this.model.id) {
      this.data.title = title;
      this.tasksService.edit(this.data);
    } else {
      this.tasksService.add(new Task({
        id: shortid.generate(),
        title,
      }));
    }
  }
}
