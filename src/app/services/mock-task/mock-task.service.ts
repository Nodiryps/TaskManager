import { Injectable } from '@angular/core';
import {Task} from "../../models/task";
import {Priority} from "../../models/priority";
import {TaskService} from '../task/task.service';

@Injectable({
  providedIn: 'root'
})
export class MockTaskService extends TaskService {

  private tasks: Task[] = [
    {id: 1, description: 'An SQL statement walks into a bar. It sees 2 tables, and asks: "May I join you?"', completed: false, cancelled: false, priority: Priority.Normal},
    {id: 2, description: 'How many programmers does it take to change a light bulb? None. It’s a hardware problem.', completed: false, cancelled: false, priority: Priority.Low},
    {id: 3, description: 'Best place to hide a body? Page 2 of Google.', completed: false, cancelled: false, priority: Priority.High}
  ]

  constructor() {
    super();
  }

  getAllTasks(): Task[] {
    return this.tasks
  }

  addTask(task: Task): Task[] {
    return this.tasks = [...this.tasks, task];
  }

  removeTask(task: Task): Task[] {
    return this.tasks = this.tasks.filter((t) => t !== task);
  }
}
