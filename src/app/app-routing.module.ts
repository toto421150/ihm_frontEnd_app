import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes =[
  {path: '',redirectTo:'welcome',pathMatch:'full'},
  {path: 'products',component:ProductsComponent},
  {path: 'users',component:UsersComponent},
  {path: 'orders',component:OrdersComponent},
  {path: 'contact',component:ContactComponent},
  {path: 'welcome',component:WelcomeComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
