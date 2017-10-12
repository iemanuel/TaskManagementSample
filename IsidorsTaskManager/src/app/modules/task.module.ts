import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseModule } from '../shared/base.module';

@NgModule({
  imports: [
    CommonModule,
    BaseModule,    
    RouterModule.forChild([
      { path: 'alltasks', component: AllTasksComponent },
      { path: 'Task/:id', component: TaskComponent }
  ]),
  ],
  declarations: []
})
export class TaskModule { }
