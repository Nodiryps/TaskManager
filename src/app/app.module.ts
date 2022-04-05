import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';

import {TaskCreatorComponent} from './task-creator/task-creator.component';
import {TaskCardComponent} from './task-card/task-card.component';
import {TaskListComponent} from './task-list/task-list.component';

import {TaskService} from './services/task/task.service';
import {MockTaskService} from './services/mock-task/mock-task.service';

@NgModule({
  declarations: [
    AppComponent,
    TaskCreatorComponent,
    TaskCardComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [{ provide: TaskService, useClass: MockTaskService }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
