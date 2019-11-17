import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<firebase.User>;


constructor(private afAuth: AngularFireAuth, private route: ActivatedRoute, private router: Router) {
  this.user$ = afAuth.authState;
 }

loginGoogle() {
  // this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
 this.authLogin(new firebase.auth.GoogleAuthProvider());
}


loginFb() {
// this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
this.authLogin(new firebase.auth.FacebookAuthProvider());

}

authLogin(provider) {
  this.afAuth.auth.signInWithPopup(provider)
    .then((result) => {
      console.log('Successfully Logged in !');
    }).catch((error) => {
        console.log(error);
    });
  const returnUrl =  '/';
  localStorage.setItem('returnUrl', returnUrl);
  }


  logout() {
    return this.afAuth.auth.signOut();
  }

}




