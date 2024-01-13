import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { param } from 'jquery';
import { UserAuthService } from 'src/app/services/models/user-auth.service';
import { UserService } from 'src/app/services/models/user.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrl: './update-password.component.css'
})
export class UpdatePasswordComponent implements OnInit{
  constructor(private userAuthService: UserAuthService, private activatedRoute: ActivatedRoute, private userService: UserService, private router: Router){

  }
  // state: any = {};
  ngOnInit(): void {

    this.activatedRoute.params.subscribe({
      next: async params => {
        const userId: string = params["userId"];
        const resetToken: string = params["resetToken"];
        await this.userAuthService.verifyResetToken(resetToken, userId, () => {
         console.log("şifre güncellendi");
        })
      }
    });
  }
  updatePassword(password:string, passwordConfirm:string){
    if(password!=passwordConfirm){
      console.log("Şifreler aynı değil tekrar giriniz.")
      return;
    }

      this.activatedRoute.params.subscribe({
        next: async params=>{
          const userId: string = params["userId"];
        const resetToken: string = params["resetToken"];
       await this.userService.updatePassword(userId,resetToken,password,passwordConfirm,()=>{
        console.log("Başarılı bir şekilde şifre yenilenmiştir")
        this.router.navigate(["/login"]);
       },()=>{"Şifre değişikliği yapılamadı, tekrar deneyiniz."});
        }
      })
  }

}
