import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { ComponentsModule } from './components/components.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';





@NgModule({
  declarations: [



  ],
  imports: [
    CommonModule,
    LayoutModule,
    ComponentsModule,
    MatSidenavModule,
    MatButtonModule
  ]
})
export class AdminModule { }
