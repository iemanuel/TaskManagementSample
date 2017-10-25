import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  private userName:FormControl
  private alias:FormControl
  constructor(private router:Router,private auth:AuthService,) { }

  ngOnInit() {
    this.userName = new FormControl(this.auth.currentUser.username);
    this.alias = new FormControl(this.auth.currentUser.name);

    this.profileForm = new FormGroup({
      userName: this.userName,
      alias: this.alias,
    })
  }

  cancel() {
    this.router.navigate(['home']);
  }

  saveProfile(formValues) {
         this.auth.updateUserDetails(formValues.alias)
         this.router.navigate(['home'])
  }
  logout() {
    this.auth.logout()
    this.router.navigate(['home'])
  }
}
