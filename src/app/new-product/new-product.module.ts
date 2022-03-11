import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewProductRoutingModule } from './new-product-routing.module';
import { NewProductComponent } from './new-product.component';
import { ReactiveFormsModule } from '@angular/forms';

import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {InputNumberModule} from 'primeng/inputnumber';


@NgModule({
  declarations: [
    NewProductComponent
  ],
  imports: [
    CommonModule,
    NewProductRoutingModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule
  ]
})
export class NewProductModule { }
