import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseModule } from '../shared/base.module';
import { RouterModule } from '@angular/router';
import { TaskDetailComponent,TasksComponent } from '../tasks';

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
    TasksComponent,
   
  ]
})
export class TaskModule { }
