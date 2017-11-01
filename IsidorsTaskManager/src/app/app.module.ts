import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BoardsModule,UserModule, TaskModule } from './modules';
import { FormsModule, ReactiveFormsModule,FormGroup } from '@angular/forms'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { mainRoutes } from './routes/Routes';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
    ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    BoardsModule,
    TaskModule,
    UserModule,
    RouterModule.forRoot(mainRoutes)
 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
