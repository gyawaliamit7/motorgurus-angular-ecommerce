import { Observable } from 'rxjs';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent  {
  user$: any;

  constructor(private auth: AuthService) {
    this.user$ = auth.user$;
  }


  logout() {
    this.auth.logout();
  }

}
