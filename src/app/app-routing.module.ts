import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './ui/components/home/home.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: "admin", component:LayoutComponent, children:[
      {path:"",component:DashboardComponent},
      {path:"customer", loadChildren:()=>import("./admin/components/customer/customer.module").then(module=> module.CustomerModule)},
      {path:"user", loadChildren:()=>import("./admin/components/user/user.module").then(module=> module.UserModule)},


]},
  {path:"", component:HomeComponent},
  {path:"about", loadChildren:()=>import("./ui/components/about/about.module").then(module=>module.AboutModule)},
  {path:"contact", loadChildren:()=>import("./ui/components/contact/contact.module").then(module=>module.ContactModule)},
  {path:"customer", loadChildren:()=>import("./ui/components/customer/customer.module").then(module=>module.CustomerModule)},
  {path:"login", loadChildren:()=>import("./ui/components/login/login.module").then(module=>module.LoginModule)},
  {path:"register", loadChildren:()=>import("./ui/components/register/register.module").then(module=>module.RegisterModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//   {path:"product", loadChildren:()=>import("./admin/components/product/product.module").then(module=>module.ProductModule),canActivate:[authGuard]},
    //   {path:"order", loadChildren:()=>import("./admin/components/order/order.module").then(module=>module.OrderModule),canActivate:[authGuard]},
    //   {path:"user", loadChildren:()=>import("./admin/components/user/user.module").then(module=>module.UserModule),canActivate:[authGuard]},
    // ],canActivate:[authGuard]
