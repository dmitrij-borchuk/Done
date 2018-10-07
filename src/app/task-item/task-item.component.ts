import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
} from '@angular/core';
import Task from '../task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() data: Task;
  @ViewChild('itemElement') itemElement: ElementRef;
  panInProgress: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  private setOffset(offset) {
    const el = this.itemElement.nativeElement;
    el.style.transform = `translateX(${offset}px)`;
  }

  onPan(e) {
    this.setOffset(e.deltaX);
  }

  onPanStart(e) {
    this.panInProgress = true;
  }

  onPanEnd(e) {
    this.panInProgress = false;
    this.setOffset(0);
  }
}
