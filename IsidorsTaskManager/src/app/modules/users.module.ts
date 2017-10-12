import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseModule } from '../shared/base.module';
import { UserComponent } from '../user/user.component';
import { UsersComponent } from '../user/users.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    BaseModule,
    RouterModule.forChild([
      { path: 'users', component: UsersComponent },
      { path: 'users/:id', component: UserComponent }
  ]),
  ],
  declarations: [
    UserComponent,
    UsersComponent
  ]
})
export class UserModule { }
