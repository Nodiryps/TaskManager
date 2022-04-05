import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Priority} from '../models/priority';
import {Task} from '../models/task';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent {
  @Input() task!: Task;
  @Output() onComplete = new EventEmitter<Task>();
  @Output() onCancel = new EventEmitter<Task>();

  lowPriority = Priority.Low;
  normalPriority = Priority.Normal;
  highPriority = Priority.High;

  constructor() {
  }

  setCompleted(task: Task) {
    task.completed = !task.completed;
    this.onComplete.emit(task);
  }

  setCancelled(task: Task, event: Event): void {
    event.preventDefault();
    task.cancelled = !task.cancelled;
    this.onCancel.emit(task);
  }
}
