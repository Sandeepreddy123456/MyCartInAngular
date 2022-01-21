import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { CartComponent } from './cart/cart.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { NavComponent } from './nav/nav.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page/login-page.component';
// import { itemResolver } from './itemResolver';
// import { cartResolver } from './cartResolver';


@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    CartComponent,
    MyOrdersComponent,
    NavComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    // itemResolver
              // cartResolver
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
