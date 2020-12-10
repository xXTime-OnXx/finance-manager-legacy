import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

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
