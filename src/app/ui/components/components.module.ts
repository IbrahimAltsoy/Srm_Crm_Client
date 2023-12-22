import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutModule } from './about/about.module';
import { ContactModule } from './contact/contact.module';
import { CustomerModule } from './customer/customer.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AboutModule,
    ContactModule,
    CustomerModule,
    HomeModule,
    LoginModule,
    RegisterModule
  ]
})
export class ComponentsModule { }
