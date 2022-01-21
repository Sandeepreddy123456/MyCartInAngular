import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartComponent } from './cart/cart.component';
import { cartResolver } from './cartResolver';
import { itemResolver } from './itemResolver';
import { ItemsComponent } from './items/items.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { orderResolver } from './orderResolver';

const routes: Routes = [
  {path:'login',component:LoginPageComponent},
  {path:'items',
        component:ItemsComponent,
          resolve:{itemsData:itemResolver}
        },
  {path :'',redirectTo:'/items',pathMatch:'full'},
  {path:'cart',
  pathMatch:'full',
  component:CartComponent,
  resolve:{cartData:cartResolver}
  },
  {path:'myOrders',
  component:MyOrdersComponent,
   resolve:{orderData:orderResolver}
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
