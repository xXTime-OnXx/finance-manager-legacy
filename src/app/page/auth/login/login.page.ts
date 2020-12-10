import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../service/auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;
  showValidation = false;

  constructor(private auth: AuthService) {}

  ngOnInit() {}


  login() {
    this.auth.login(this.email, this.password).catch(() => {
      this.showValidation = true;
    });
  }

}
