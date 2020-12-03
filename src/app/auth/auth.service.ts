import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';

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
    await this.afAuth.createUserWithEmailAndPassword(email, password);
    console.log('You have successfully registered a user!');
    await this.route.navigate(['tabs']);
  }

  get authenticated(): boolean {
    return this.afAuth.currentUser !== null;
  }

  logout() {
    this.afAuth.signOut();
  }
}


