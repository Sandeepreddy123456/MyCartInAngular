import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ItemsComponent } from './items/items.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';

const routes: Routes = [
  {path:'login',component:LoginPageComponent},
  {path:'items',component:ItemsComponent},
  {path :'',redirectTo:'/items',pathMatch:'full'},
  {path:'cart',component:CartComponent},
  {path:'myOrders',component:MyOrdersComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
