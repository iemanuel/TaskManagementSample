import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseModule } from '../shared/base.module';
import { BoardComponent } from './board.component';
import { TaskDetailComponent } from './task-detail.component';
import { RouterModule } from '@angular/router';
import { TaskService } from './task.service';

@NgModule({
  imports: [
    CommonModule,
    BaseModule,
    
    RouterModule.forChild([
      { path: 'tasks', component: BoardComponent },
      { path: 'tasks/:id', component: TaskDetailComponent }
  ]),

  ],
  declarations: [     
    BoardComponent,
    TaskDetailComponent
  ],
  providers :[TaskService]
})
export class TasksModule { }
