import { Component } from '@angular/core';
import { UserAuthService } from 'src/app/services/models/user-auth.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrl: './password-reset.component.css'
})
export class PasswordResetComponent {
  constructor(private authUserService:UserAuthService){}
  passwordReset( email:string){
    this.authUserService.passwordReset(email,()=>{
      console.log("şifre yenilenmek üzere link gönderildi");
    });

  }

}
