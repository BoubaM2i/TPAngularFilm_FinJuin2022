import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './_commons/navbar/navbar.component';
import { FooterComponent } from './_commons/footer/footer.component';
import { HomePageComponent } from './_pages/home-page/home-page.component';
import { NotFoundComponent } from './_pages/not-found/not-found.component';
import { ProductsPageComponent } from './_pages/products-page/products-page.component';
import {MatSliderModule} from '@angular/material/slider'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductListComponent } from './products-page/product-list/product-list.component';
import { ProductCardComponent } from './products-page/product-card/product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NotFoundComponent,
    HomePageComponent,
    ProductsPageComponent,
    ProductListComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
