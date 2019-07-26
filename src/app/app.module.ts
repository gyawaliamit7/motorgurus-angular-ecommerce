import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { BikesComponent } from './bikes/bikes.component';
import { SavedListingComponent } from './user/saved-listing/saved-listing.component';
import { SellBikeComponent } from './user/sell-bike/sell-bike.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    BikesComponent,
    SavedListingComponent,
    LoginComponent,
    SellBikeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot([
      { path: '' , component:HomeComponent },
      { path: 'bikes' , component:BikesComponent },
      { path: 'login' , component: LoginComponent},
      { path: 'user/sell-bikes' , component: SellBikeComponent},
      { path: 'user/saved-listing' , component: SavedListingComponent},



    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
