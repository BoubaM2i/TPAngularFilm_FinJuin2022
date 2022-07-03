import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './_pages/home-page/home-page.component';
import { ProductsPageComponent } from './_pages/products-page/products-page.component'; 
import { NotFoundComponent } from './_pages/not-found/not-found.component'; 

const routes : Routes = [
  // Déclaration de la correspondance entre URI et le composant
  // Le terme 
  {path : '', redirectTo : 'home', pathMatch : 'full'},
  {path : 'home', component : HomePageComponent},
  {path : 'products', component : ProductsPageComponent},
  {path : '**', component : NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
