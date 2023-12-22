import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserModule } from './user/user.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { CustomerModule } from './customer/customer.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,UserModule,DashboardModule,
    CustomerModule
  ]
})
export class ComponentsModule { }
