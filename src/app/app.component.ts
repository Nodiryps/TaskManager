import {Component, OnInit} from '@angular/core';
import {Task} from './models/task';
import {TaskService} from './services/task/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Task Manager';
  tasks!: Task[];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.tasks = this.taskService.getAllTasks();
  }

  addTaskToList(task: Task): void {
    this.tasks = this.taskService.addTask(task);
  }

  removeTaskFromList(task: Task): void {
    this.tasks = this.taskService.removeTask(task);
  }
}
