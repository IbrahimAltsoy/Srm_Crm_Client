import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { GoogleSigninButtonModule } from '@abacritt/angularx-social-login';



@NgModule({
  declarations: [
   // LoginComponent
  ],
  imports: [
    CommonModule,
    GoogleSigninButtonModule,
    RouterModule.forChild([
      {path: "", component: LoginComponent}
    ])
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoginModule { constructor(){

}}
