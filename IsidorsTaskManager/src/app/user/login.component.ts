import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password: string;
  userName: string;
 
  constructor(public auth: AuthService,private router:Router) { }
  errorMessage: string;
  ngOnInit() {
    
  }

  login(loginForm: NgForm) { 
    
    this.auth.login(loginForm.value.userName, loginForm.value.password)
      if(this.auth.isAuthenticated){
        this.router.navigate(['home'])
      }else{
        this.errorMessage="error";   
      
        loginForm.reset()
      } 
  } 
  cancel() {
    this.router.navigate(['home'])
  }
}
