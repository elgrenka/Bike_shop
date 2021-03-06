import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BikesService } from '../bikes.service';
import { bikeData } from '../bikeData';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { AngularFireDatabase } from '@angular/fire/compat/database';

import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-bikes-details',
  templateUrl: './bikes-details.component.html',
  styleUrls: ['./bikes-details.component.css']
})
export class BikesDetailsComponent implements OnInit {

  dataCart: any = [];
  dataWishList: any = [];

  faStar = faStar;

  bike: bikeData | undefined;
  
  addToCart2(inputValue: string, bikeName: string, bikeImg: string) {
    this.bikesService.addToCart2(inputValue, bikeName, bikeImg);
    window.alert('Your product has been added to the Cart1 and Cart2');
  }

  constructor(
    private route: ActivatedRoute,
    private bikesService: BikesService,
    private location: Location,
    private db: AngularFireDatabase,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getBike();

    const ref = this.db.list("cart");
    ref.valueChanges().subscribe((data) => {
      this.dataCart = data;
    })

    const ref2 = this.db.list("wishList");
    ref2.valueChanges().subscribe((data) => {
      this.dataWishList = data;
    })
  }

  getBike(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.bikesService.getBike(id)
    .subscribe(bike => this.bike = bike);
  }

  goBack(): void {
    this.location.back();
  }

  addToCart(inputValue: string, bikeName: string, bikeImg: string) {
    const ref = this.db.list("cart");
    ref.push([inputValue, bikeName, bikeImg]).then((resp) => {
      console.log(resp);
    }).catch((error) => {
      console.error(error);
    })
  }

  addToWishList(inputValue: string, bikeName: string, bikeImg: string) {
    const ref2 = this.db.list("wishList");
    ref2.push([inputValue, bikeName, bikeImg]).then((resp) => {
      console.log(resp);
    }).catch((error) => {
      console.error(error);
    })
  }

  detailsForm = this.fb.group({
    colorBike: [''],
    sizeBike: [''],
    quantityBike: ['', Validators.required]
  })

}
