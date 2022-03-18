import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  newProductForm = new FormGroup({
    productImage: new FormControl(''),
    productId: new FormControl(''),
    productPrice: new FormControl(''),
    productDiscount: new FormControl(''),
    productMain: new FormControl(''),
    productShop: new FormControl(''),
    productName: new FormControl(''),
    productDescription: new FormControl(''),
    productShipping: new FormControl(''),
    productUntil: new FormControl(''),
    productNew: new FormControl(''),
    productColor: new FormControl(''),
    productSize: new FormControl(''),
    productAuthor: new FormControl(''),
    productText: new FormControl(''),
    productRating: new FormControl('')
  })

  onSubmit() {
    console.table(this.newProductForm.value);
  }

  saveData(inputValue: string) {
    const ref = this.db.list("items");
    ref.push(inputValue).then((resp) => {
      console.log(resp);
    }).catch((error) => {
      console.error(error);
    })
  }

  data: any = [];

  constructor(private db: AngularFireDatabase) { }

  ngOnInit(): void {
    const ref = this.db.list("items");
    ref.valueChanges().subscribe((data) => {
      this.data = data;
    })
  }

}
