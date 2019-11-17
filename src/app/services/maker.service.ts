import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MakerService {

constructor(private db: AngularFireDatabase) { }


getMaker() {
  return this.db.list('/maker', {
    query: {
      orderByChild: 'name'
    }
  });
}
}
