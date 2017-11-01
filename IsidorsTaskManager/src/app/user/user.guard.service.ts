import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class UserGuardService implements CanActivate {

  constructor(private _router: Router,private _auth: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {

    if(!this._auth.isAuthenticated()){
        alert('Loggedin users only');
        this._router.navigate(['/login']);
        return false;
    }
     else if (!this._auth.CurrentUser.isAdmin) {
       alert('User not have enough permissions to acces this page.');
       this._router.navigate(['/']);
       return false;
     }   
     return true;
  }
}
