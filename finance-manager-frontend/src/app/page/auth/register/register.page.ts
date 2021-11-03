import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../service/auth/auth.service';
import {UserService} from '../../../service/user/user.service';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  username = '';
  email = '';
  password = '';
  passwordConfirm = '';
  validEmail = false;
  passwordsMatch = false;
  showValidation = false;

  constructor(private auth: AuthService, private userService: UserService, private afAuth: AngularFireAuth) {}

  ngOnInit() {
  }

  isFormValid() {
    if (this.email.match(new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'))) {
      this.validEmail = true;
    }
    if (this.password === this.passwordConfirm) {
      this.passwordsMatch = true;
    }
    return this.validEmail && this.passwordsMatch;

  }

  async register() {
    if (this.isFormValid()) {
      await this.auth.register({
        username: this.email,
        password: this.password,
        phone: ''
      });
      await this.auth.login({
        username: this.email,
        password: this.password
      });
    }
    this.showValidation = true;
  }

  async createUser(currUserId: string) {
    const user = {
      username: this.username,
      userid: currUserId,
      trips: []
    };
    await this.userService.createUser(user);
  }

}
