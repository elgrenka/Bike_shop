import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikesMainComponent } from './bikes-main/bikes-main.component';
import { BikesDetailsComponent } from './bikes-details/bikes-details.component';
import { BikesOrderComponent } from './bikes-order/bikes-order.component';
import { BikesContactComponent } from './bikes-contact/bikes-contact.component';
import { BikesOrderSubmitComponent } from './bikes-order-submit/bikes-order-submit.component';
import { BikesCartComponent } from './bikes-cart/bikes-cart.component';
import { BikesWishlistComponent } from './bikes-wishlist/bikes-wishlist.component';
import { BikesCart2Component } from './bikes-cart2/bikes-cart2.component';

const routes: Routes = [
  { path: 'bikes', component: BikesMainComponent },
  { path: '', redirectTo: 'bikes', pathMatch: 'full' },
  { path: 'details/:id', component: BikesDetailsComponent },
  { path: 'order', component: BikesOrderComponent },
  { path: 'contact', component: BikesContactComponent },
  { path: 'bikes-order-submit', component: BikesOrderSubmitComponent },
  { path: 'new-product', loadChildren: () => import('./new-product/new-product.module').then(m => m.NewProductModule) },
  { path: 'bikes-cart', component: BikesCartComponent },
  { path: 'bikes-wishlist', component: BikesWishlistComponent },
  { path: 'bikes-cart2', component: BikesCart2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
