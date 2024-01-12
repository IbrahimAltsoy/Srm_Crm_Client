import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutModule } from './about/about.module';
import { ContactModule } from './contact/contact.module';
import { CustomerModule } from './customer/customer.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { PasswordResetModule } from './password-reset/password-reset.module';
import { UpdatePasswordModule } from './update-password/update-password.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AboutModule,
    ContactModule,
    CustomerModule,
    HomeModule,
    LoginModule,
    RegisterModule,
    PasswordResetModule,
    UpdatePasswordModule
  ]
})
export class ComponentsModule { }
