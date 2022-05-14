import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { data } from '../assets/data';
import { bikeData } from './bikeData';

@Injectable({
  providedIn: 'root'
})
export class BikesService {

  // items: bikeData[] = [];
  items: any[] = [];

  getBikes(): Observable<bikeData[]> {
    return of(data);
  }

  getBike(id: number): Observable<bikeData> {
    return of(data.find(bike => bike.id === id)!);
  }

  addToCart2(bike1: any, bike2: any, bike3: any) {
    this.items.push([bike1, bike2, bike3]);
    console.log(this.items);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  constructor() { }
}
