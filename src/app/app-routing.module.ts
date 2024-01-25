import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './ui/components/home/home.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { UpdateComponent } from './admin/components/customer/update/update.component';
import { ReadComponent } from './admin/components/customer/read/read.component';
import { CreateComponent } from './admin/components/customer/create/create.component';

const routes: Routes = [
  {
    path: "admin", component: LayoutComponent, children: [
      { path: "", component: DashboardComponent },
      { path: 'update/:id', component: UpdateComponent },
      { path: "customer", component: ReadComponent },
      { path: "customer/create", component: CreateComponent },
      { path: "user", loadChildren: () => import("./admin/components/user/user.module").then(module => module.UserModule) },
      { path: "employe", loadChildren: () => import("./admin/components/employe/employe.module").then(module => module.EmployeModule) },
      { path: "request", loadChildren: () => import("./admin/components/request/request.module").then(module => module.RequestModule) }
    ]
  },
  { path: "", component: HomeComponent },
  { path: "about", loadChildren: () => import("./ui/components/about/about.module").then(module => module.AboutModule) },
  { path: "contact", loadChildren: () => import("./ui/components/contact/contact.module").then(module => module.ContactModule) },
  { path: "ui-customer", loadChildren: () => import("./ui/components/customer/customer.module").then(module => module.CustomerModule) },
  { path: "login", loadChildren: () => import("./ui/components/login/login.module").then(module => module.LoginModule) },
  { path: "register", loadChildren: () => import("./ui/components/register/register.module").then(module => module.RegisterModule) },
  { path: "password-reset", loadChildren: () => import("./ui/components/password-reset/password-reset.module").then(module => module.PasswordResetModule) },
  { path: "update-password/:userId/:resetToken", loadChildren: () => import("./ui/components/update-password/update-password.module").then(module => module.UpdatePasswordModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
