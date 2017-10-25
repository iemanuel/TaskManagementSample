import { Injectable } from '@angular/core';
import { IUser,ITask } from '../models';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import "rxjs/add/observable/of";import "rxjs/add/observable/from";
@Injectable()
export class AuthService {

  public currentUser:IUser
  constructor(private _http: HttpClient) { }
  
  private _usersUrl = '../api/users/users.json';
  
  isAuthenticated() {
    return !!this.currentUser;
  }

  updateUserDetails(name: string){
this.currentUser.name = name;
  }
  login(userName: string, password: string): Observable<boolean>{
 
    var x =  this.getUsers().subscribe(users => {
    this.currentUser = users.map(users=>users).filter(user=>user.username===userName)[0];
  
  },error =>   {console.error(error.message)   
  this.currentUser = undefined;    
  });
      
      return Observable.of(!!this.currentUser); 
    
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
    this.currentUser = undefined;    
  }
}
