import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private route: Router) { }

  get authenticated(): boolean {
    return this.afAuth.currentUser != null;
  }

  async login(user: User) {
    await this.afAuth.signInWithEmailAndPassword(user.email, user.password);
    console.log('You have been successfully logged in!');
    await this.route.navigate(['tabs']);
  }

  async register(user: User) {
    await this.afAuth.createUserWithEmailAndPassword(user.email, user.password);
    console.log('You have successfully registered a user!');
    await this.route.navigate(['tabs']);
  }

  logout() {
    this.afAuth.signOut();
  }
}

export interface User {
  email: string;
  password: string;
}
