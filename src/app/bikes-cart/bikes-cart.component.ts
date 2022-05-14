import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-bikes-cart',
  templateUrl: './bikes-cart.component.html',
  styleUrls: ['./bikes-cart.component.css']
})
export class BikesCartComponent implements OnInit {

  dataCart: any = [];

  clearCart() {
    this.db.list(`cart`).remove();
  }

  constructor(private db: AngularFireDatabase) { }

  ngOnInit(): void {
    const ref = this.db.list("cart");
    ref.valueChanges().subscribe((data) => {
      this.dataCart = data;
      // console.table(this.dataCart[this.dataCart.length - 1]);
    })
  }

}
