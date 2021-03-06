import { BikesService } from './services/bikes.service';
import { MakerService } from './services/maker.service';
import { UserService } from './services/user.service';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { BikesComponent } from './bikes/bikes.component';
import { SavedListingComponent } from './user/saved-listing/saved-listing.component';
import { SellBikeComponent } from './user/sell-bike/sell-bike.component';
import { LoginComponent } from './login/login/login.component';
import { EmailComponent } from './login/email/email.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';

import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    BikesComponent,
    SavedListingComponent,
    SellBikeComponent,
    LoginComponent,
    EmailComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,


    RouterModule.forRoot([
      { path: '' , component:HomeComponent },
      { path: 'bikes' , component:BikesComponent },
      { path: 'user/sell-bikes' , component: SellBikeComponent , canActivate: [AuthGuardService]},
      { path: 'user/saved-listing' , component: SavedListingComponent, canActivate: [AuthGuardService]},
      { path: 'login/login', component: LoginComponent },
      { path: 'login/sign-up',component: SignUpComponent },
      { path: 'login/email',component: EmailComponent },

    ]),
  ],
  providers: [
    AuthService,
    AuthGuardService,
    UserService,
    MakerService,
    BikesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
