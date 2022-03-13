import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BikesService } from './bikes.service';
import { BikesComponent } from './bikes/bikes.component';
import { BikesMainComponent } from './bikes-main/bikes-main.component';
import { BikesDetailsComponent } from './bikes-details/bikes-details.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BikesOrderComponent } from './bikes-order/bikes-order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderEditorComponent } from './order-editor/order-editor.component';
import { BikesContactComponent } from './bikes-contact/bikes-contact.component';
import { BikesOrderSubmitComponent } from './bikes-order-submit/bikes-order-submit.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    BikesComponent,
    BikesMainComponent,
    BikesDetailsComponent,
    BikesOrderComponent,
    OrderEditorComponent,
    BikesContactComponent,
    BikesOrderSubmitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [BikesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
