import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { BikesService } from '../bikes.service';
import { bikeData } from '../bikeData';
// import { NewProductComponent } from '../new-product/new-product.component';

@Component({
  selector: 'app-bikes-main',
  templateUrl: './bikes-main.component.html',
  styleUrls: ['./bikes-main.component.css']
})
export class BikesMainComponent implements OnInit {

  public bikes: bikeData[] = []; 

  constructor(private bikesService: BikesService) {
  }

  ngOnInit(): void {
    this.getBikes();
  }

  getBikes() {
    this.bikesService.getBikes()
      .subscribe(bikes => this.bikes = bikes);
  }

  // @ViewChild(NewProductComponent) child:any;

  // message!: string;

  // ngAfterViewInit() {
  //   this.message = this.child.message;
  // }

}
