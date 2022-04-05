import {Injectable} from '@angular/core';
import {Task} from '../../models/task';

@Injectable({
  providedIn: 'root'
})
export abstract class TaskService {

  abstract getAllTasks(): Task[];
  abstract addTask(task: Task): Task[];
  abstract removeTask(task: Task): Task[];
}
