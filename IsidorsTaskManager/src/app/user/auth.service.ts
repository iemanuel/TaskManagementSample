import { Injectable } from '@angular/core';
import { IUser } from '../models/user';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class AuthService {

  public currentUser:IUser
  constructor(private _http: HttpClient) { }
  private _usersUrl = './api/users/users.json';
  isAuthenticated() {
    return !!this.currentUser;
  }

  login(userName: string, password: string){
   
    this.currentUser= new IUser
      {
        
        userName="admin",        
        password = "admin"
        
        
    }
    
     
 
  }
  getUsers(): Observable<IUser[]> {
        return this._http.get<IUser[]>(this._usersUrl)
            .do(data => console.log('All: ' + JSON.stringify(data)))
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
