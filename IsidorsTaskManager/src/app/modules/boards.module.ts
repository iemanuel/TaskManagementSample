import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseModule } from '../shared/base.module';
import { BoardComponent } from '../boards/board.component';

import { RouterModule } from '@angular/router';
import { BoardsComponent } from '../boards/boards.component';

import { TaskModule } from './task.module';
import { TaskService } from '../tasks/';
@NgModule({
  imports: [
    CommonModule,
    BaseModule,
    TaskModule,    
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
