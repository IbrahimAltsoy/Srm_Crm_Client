import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { ComponentsModule } from '../components/components.module';
import { RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HidebarComponent } from './components/hidebar/hidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    HidebarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
    MatSidenavModule,MatListModule
  ], exports:[
    LayoutComponent
  ]
})
export class LayoutModule { }
