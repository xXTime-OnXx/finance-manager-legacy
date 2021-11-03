import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../service/auth/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;
  showValidation = false;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {}


  async login() {
    try {
      await this.auth.login({username: this.email, password: this.password});
      await this.router.navigate(['tabs/trip'])
    } catch (e) {
      this.showValidation = true;
    }
  }

}
