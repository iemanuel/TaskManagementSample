import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BoardsModule } from './modules/boards.module';


import { UserModule } from './modules/users.module';
import { TasksComponent } from './tasks/tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TasksComponent
 
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    NgbModule.forRoot(),
    BoardsModule,
    UserModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: '**', redirectTo: 'home', pathMatch: 'full'}      
  ])
 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
