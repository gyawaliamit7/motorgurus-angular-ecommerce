import { BikesService } from './../../services/bikes.service';
import { MakerService } from './../../services/maker.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sell-bike',
  templateUrl: './sell-bike.component.html',
  styleUrls: ['./sell-bike.component.css']
})
export class SellBikeComponent implements OnInit {

  makers$;
  constructor(private makerService: MakerService, private  bikeService: BikesService ) {
    this.makers$ = makerService.getMaker();
  }

  ngOnInit() {
  }

  save(bikes) {
    console.log(bikes);
    this.bikeService.create(bikes);
  }

}
