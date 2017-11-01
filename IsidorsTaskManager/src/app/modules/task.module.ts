import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseModule } from '../shared/base.module';
import { RouterModule } from '@angular/router';
import { TaskDetailComponent,TasksComponent } from '../tasks';
import { UserGuardService } from '../user/user.guard.service';

@NgModule({
  imports: [
    CommonModule,
    BaseModule,  
  
    RouterModule.forChild([
      { path: 'tasks',canActivate: [ UserGuardService ],component: TasksComponent }
      ,{ path: 'task/:id', component: TaskDetailComponent }
  ]),
  ],
  declarations: [
    TaskDetailComponent,
    TasksComponent
  ],
  exports:[
    TaskDetailComponent,
    TasksComponent,
   
  ],providers: [UserGuardService]
})
export class TaskModule { }
