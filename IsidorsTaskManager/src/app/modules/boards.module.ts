import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseModule } from '../shared/base.module';
import { BoardComponent } from '../boards/board.component';

import { RouterModule } from '@angular/router';
import { TaskService } from '../tasks/task.service';
import { BoardsComponent } from '../boards/boards.component';
import { TaskDetailComponent } from '../tasks/task-detail.component';

@NgModule({
  imports: [
    CommonModule,
    BaseModule,
    
    RouterModule.forChild([
      { path: 'boards', component: BoardsComponent },
      { path: 'boards/:id', component: BoardComponent }
  ]),

  ],
  declarations: [     
    BoardComponent,   
    BoardsComponent
  ],
  providers :[TaskService]
})
export class BoardsModule { }
