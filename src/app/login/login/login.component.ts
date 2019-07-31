import { HomeComponent } from './../../home/home.component';
import { Component, OnInit, HostBinding} from '@angular/core';
import { Router } from '@angular/router';
//import { moveIn } from '../router.animations'
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  //animations:[moveIn()],
 // host: {'[@moveIn]': ''}

})
export class LoginComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth,private router:Router) { }

  ngOnInit() {
  }

  loginGoogle(){
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  
  }

  loginFb(){
    this.afAuth.auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider());

  }

}


