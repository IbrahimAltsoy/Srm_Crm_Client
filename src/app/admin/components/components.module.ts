import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserModule } from './user/user.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { CustomerModule } from './customer/customer.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RequestModule } from './request/request.module';
import { EmployeModule } from './employe/employe.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserModule,
    DashboardModule,
    MatSidenavModule,
    // RequestModule,
    // EmployeModule,
    // CustomerModule

  ]
})
export class ComponentsModule { }
