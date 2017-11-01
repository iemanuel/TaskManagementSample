import { ProfileComponent,LoginComponent,UsersComponent } from '../user'
import {HomeComponent } from '../home/home.component'
import { UserGuardService } from '../user/user.guard.service';
export const userRoutes = [
  { path: 'profile', component: ProfileComponent},
  { path: 'users', canActivate: [  UserGuardService ],component: UsersComponent },
  

  { path: 'login', component: LoginComponent}
]
export const mainRoutes = [
    { path: 'home', component: HomeComponent },  
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: '**', redirectTo: 'home', pathMatch: 'full'} 
  ]

    