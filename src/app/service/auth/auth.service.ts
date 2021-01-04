import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import firebase from "firebase";
import User = firebase.User;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private route: Router) { }

  async login(email: string, password: string) {
      await this.afAuth.signInWithEmailAndPassword(email, password);
      console.log('You have been successfully logged in!');
      await this.route.navigate(['tabs']);
  }

  async register(email: string, password: string) {
    await this.afAuth.createUserWithEmailAndPassword(email, password).then((af) => {
      console.log('You have successfully registered a user!');
    });
    await this.route.navigate(['tabs']);
  }

  async getCurrentUser(): Promise<User> {
    return this.afAuth.currentUser;
  }

  async logout() {
    await this.afAuth.signOut();
  }
}


