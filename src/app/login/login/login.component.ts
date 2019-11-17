import { AuthService } from './../../services/auth.service';
import { HomeComponent } from './../../home/home.component';
import { Component, OnInit, HostBinding} from '@angular/core';
// import { moveIn } from '../router.animations'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  // animations:[moveIn()],
 // host: {'[@moveIn]': ''}

})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  loginGoogle() {
    return this.authService.loginGoogle();
  }


  loginFb() {
    return this.authService.loginFb();
  }
}


