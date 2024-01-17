import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeComponent } from './employe.component';
import { CreateModule } from './create/create.module';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { DialogModule } from '@angular/cdk/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateComponent } from './create/create.component';
import { ReadModule } from './read/read.module';
import { ReadComponent } from './read/read.component';



@NgModule({
  declarations: [EmployeComponent, CreateComponent,ReadComponent],
  imports: [
    CommonModule,RouterModule.forChild([
      {path:"", component: EmployeComponent}
    ]),
    CreateModule,
    ReadModule,
    MatIconModule,
     MatPaginatorModule,
     MatButtonModule,
     MatFormFieldModule,
    MatSelectModule,
    MatSidenavModule,
    MatInputModule,
    DialogModule,
    MatDialogModule
  ]
})
export class EmployeModule { }
