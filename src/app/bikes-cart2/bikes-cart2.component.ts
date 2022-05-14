import { Component, OnInit } from '@angular/core';

import { BikesService } from '../bikes.service';

@Component({
  selector: 'app-bikes-cart2',
  templateUrl: './bikes-cart2.component.html',
  styleUrls: ['./bikes-cart2.component.css']
})
export class BikesCart2Component implements OnInit {

  items = this.bikesService.getItems();

  clearCart() {
    this.items = this.bikesService.clearCart();
  }

  constructor(
    private bikesService: BikesService
  ) { }

  ngOnInit(): void {
    // console.log(this.items)
  }

}
