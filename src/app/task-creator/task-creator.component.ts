import {Component, Output, EventEmitter} from '@angular/core';
import {Priority} from '../models/priority';
import {Task} from '../models/task';

@Component({
  selector: 'app-task-creator',
  templateUrl: './task-creator.component.html',
  styleUrls: ['./task-creator.component.css']
})
export class TaskCreatorComponent {
  @Output() onCreate = new EventEmitter<Task>();
  @Output() onCancel = new EventEmitter<Task>();

  title = 'TaskCreator';
  tasks!: Task[];
  newTask!: Task;
  priorities = [Priority.Low, Priority.Normal, Priority.High];

  constructor() {
    this.resetTask();
  }

  addTask(task: Task, event: Event): void|null {
    event.preventDefault();
    if (task.description === '') {
      return null;
    }
    this.onCreate.emit(task);
    this.resetTask();
  }

  private resetTask() {
    this.newTask = {id: 0, description: '', completed: false, cancelled: false, priority: Priority.Normal };
  }

  getNameForPriority(priority: Priority): string {
    return Priority[priority];
  }
}
