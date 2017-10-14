import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseModule } from '../shared/base.module';
import { RouterModule } from '@angular/router';
import { TaskDetailComponent } from '../tasks/task-detail.component';
import { TasksComponent } from '../tasks/tasks.component';

@NgModule({
  imports: [
    CommonModule,
    BaseModule,    
    RouterModule.forChild([
      
      { path: 'Task/:id', component: TaskDetailComponent }
  ]),
  ],
  declarations: [
    TaskDetailComponent,
    TasksComponent
  ],
  exports:[
    TaskDetailComponent,
    TasksComponent
  ]
})
export class TaskModule { }
