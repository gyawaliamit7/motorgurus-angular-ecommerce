import { HomeComponent } from './../../home/home.component';
import { Component, OnInit, HostBinding} from '@angular/core';
import { Router } from '@angular/router';
// import { moveIn } from '../router.animations'
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  // animations:[moveIn()],
 // host: {'[@moveIn]': ''}

})
export class LoginComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }

  loginGoogle() {
      // this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    return this.authLogin(new firebase.auth.GoogleAuthProvider());
  }


  loginFb() {
    // this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
    this.authLogin(new firebase.auth.FacebookAuthProvider());

  }

  authLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
    .then((result) => {
        console.log('You have been successfully logged in!');
    }).catch((error) => {
        console.log(error);
  });
}
}


