import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseModule } from '../shared/base.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../user/auth.service';
import { userRoutes } from '../routes/Routes';
import { UserComponent,LoginComponent,ProfileComponent } from '../user/';

@NgModule({
  imports: [
    CommonModule,
    BaseModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(userRoutes),
  ],
  declarations: [
    UserComponent,
    LoginComponent,ProfileComponent
  ],providers: [
    AuthService
  ]
})
export class UserModule { }
