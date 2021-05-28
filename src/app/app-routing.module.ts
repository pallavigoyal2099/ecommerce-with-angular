import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'products',component:ShoppingCartComponent},
  {path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
