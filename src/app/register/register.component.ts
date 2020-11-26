import { Component, OnInit } from '@angular/core';
import {User} from "../user.type";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  username: string;
  email: string;
  password: string;
  passwordConfirm: string;

  constructor(private auth: AuthService) {}

  ngOnInit() { }

  register() {
    if (this.password.match(this.passwordConfirm)) {
      console.log('Passwörter stimmen überein.');
      this.auth.register(this.email, this.password);
    } else {
      console.log('Passwörter stimmen nicht überein.');
    }
  }
}
