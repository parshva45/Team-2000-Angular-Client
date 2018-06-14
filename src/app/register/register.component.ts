import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserServiceClient,
              private router: Router) { }

  username;
  password;
  password2;
  register(username, password, password2) {
    console.log([username, password, password2]);
    this.userService
      .createUser(username, password)
      .then(() => this.router.navigate(['profile']));
  }

  ngOnInit() {
  }

}