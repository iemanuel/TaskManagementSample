import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { IUser } from '../models';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  errorMessage: any;
  public pageTitle: string = 'Users List';
  constructor(private auth:AuthService) { }
  usersList: IUser[] = [];
  ngOnInit() {
    this.auth.getUsers()
    .subscribe(users => {
        this.usersList = users;                
    },
        error => this.errorMessage = <any>error);
  }

}
