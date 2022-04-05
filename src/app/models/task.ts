import {Priority} from './priority';

export interface Task {
  id: number;
  description: string;
  completed: boolean;
  cancelled: boolean;
  priority: Priority;
}
