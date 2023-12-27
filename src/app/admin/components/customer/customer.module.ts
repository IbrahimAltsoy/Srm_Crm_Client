import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { RouterModule } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ReadComponent } from './read/read.component';
import { MatSidenavModule } from '@angular/material/sidenav';
@NgModule({
  declarations: [
    CustomerComponent,ReadComponent
  ],
  imports: [
    CommonModule,MatTableModule,RouterModule.forChild([
      {path:"", component: CustomerComponent}
    ]),MatIconModule, MatPaginatorModule,MatButtonModule,MatFormFieldModule,
    MatSelectModule,MatSidenavModule

  ]
})
export class CustomerModule { }
