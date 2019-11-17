import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class BikesService {
  sellerName;
  sellerEmail;
  sellerId;

constructor(private db: AngularFireDatabase, private auth: AuthService) {
  auth.user$.subscribe(user => {
    if (user) {
      this.sellerName = user.displayName;
      this.sellerEmail = user.email;
      this.sellerId = user.uid;
    }
  });
}

create(bike) {
  this.db.list('/bikes').push({
    sellerName: this.sellerName,
    sellerEmail: this.sellerEmail,
    sellerId: this.sellerId,
    title: bike.title,
    maker: bike.maker,
    bikeCondition: bike.bikeCondition,
    description: bike.description,
    imageUrl: bike.imageUrl,
    mode: bike.model,
    price: bike.price,
    year:bike.year
  });
}

}


