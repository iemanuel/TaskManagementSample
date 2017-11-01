import { Injectable } from '@angular/core';
import { IUser,ITask } from '../models';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import "rxjs/add/observable/of";import "rxjs/add/observable/from";
@Injectable()
export class AuthService {

 private _currentUser : IUser

  get CurrentUser(): IUser {
    try {
      return JSON.parse(window.localStorage.getItem("currentUser"));
  } catch (e) {

  }
  }
  set CurrentUser(value: IUser) {
    window.localStorage.setItem("currentUser", JSON.stringify(value));
      
  }
  constructor(private _http: HttpClient) 
  {
    
   }
  
  private _usersUrl = '../api/users/users.json';
  
  isAuthenticated() {
    return !!this.CurrentUser;
  }

  updateUserDetails(name: string){
    this.CurrentUser.name = name;
  }
  login(userName: string, password: string): Observable<boolean>{
 
    var x =  this.getUsers().subscribe(users => {
      this.CurrentUser = users.map(users=>users).filter(user=>user.username===userName)[0];
  
  },error =>   {console.error(error.message)   
    this.CurrentUser = undefined;    
  });
     
      return Observable.of(!!this.CurrentUser); 
    
  }
  
  getUsers(): Observable<IUser[]> {
        return this._http.get<IUser[]>(this._usersUrl)
            .do(
              data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    private handleError(err: HttpErrorResponse) {
      console.error(err.message);
      return Observable.throw(err.message);
  }
  logout() {
    this.CurrentUser =  undefined;    
  }
}
