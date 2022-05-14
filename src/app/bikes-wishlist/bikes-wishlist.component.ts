import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-bikes-wishlist',
  templateUrl: './bikes-wishlist.component.html',
  styleUrls: ['./bikes-wishlist.component.css']
})
export class BikesWishlistComponent implements OnInit {

  dataWishList: any = [];

  clearCart() {
    this.db.list("wishList").remove();
  }

  constructor(private db: AngularFireDatabase) { }

  ngOnInit(): void {
    const ref = this.db.list("wishList");
    ref.valueChanges().subscribe((data) => {
      this.dataWishList = data;
      console.table(this.dataWishList[this.dataWishList.length - 1]);
    })
  }

}
