import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseModule } from '../shared/base.module';
import { BoardComponent } from '../boards/board.component';

import { RouterModule } from '@angular/router';
import { BoardsComponent } from '../boards/boards.component';

import { TaskModule } from './task.module';
import { TaskService, BoardService } from '../services';
import { PriorityPipe,StatePipe } from '../pipes';
import { BoardsGuardService } from '../boards/boards.guard.service';
@NgModule({
  imports: [
    CommonModule,
    BaseModule,
    TaskModule,    
    RouterModule.forChild([
      { path: 'boards', component: BoardsComponent },
      { path: 'boards/:id', canActivate: [ BoardsGuardService ],component: BoardComponent }
  ]),

  ],
  declarations: [     
    BoardComponent,   
    BoardsComponent,
    PriorityPipe,StatePipe
    
  ],
  providers :[TaskService,BoardService, BoardsGuardService]
})
export class BoardsModule { }
