import { ProfileComponent,LoginComponent } from '../user'
import {HomeComponent } from '../home/home.component'
export const userRoutes = [
  { path: 'profile', component: ProfileComponent},
  { path: 'login', component: LoginComponent}
]
export const mainRoutes = [
    { path: 'home', component: HomeComponent },  
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: '**', redirectTo: 'home', pathMatch: 'full'} 
  ]

    