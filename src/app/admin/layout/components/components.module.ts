import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HidebarComponent } from './hidebar/hidebar.component';



@NgModule({
  declarations: [
    SidebarComponent,
    FooterComponent,
    HidebarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
