import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopCartListComponent } from './shop-cart-list/shop-cart-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  path: 'shop-cart-list',
  component: ShopCartListComponent,
  data: { title: 'Shoppin Cart List' }
];

@NgModule({
  declarations: [
    AppComponent,
    ShopCartListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
