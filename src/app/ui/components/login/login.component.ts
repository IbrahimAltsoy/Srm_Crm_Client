import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/models/auth.service';
import { UserAuthService } from 'src/app/services/models/user-auth.service';
import { UserService } from 'src/app/services/models/user.service';


// appmpdule.ts dosyasına Jwt helper den kd bloğu eklendi, kontrol et
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  constructor(private authService:AuthService,private authUserService: UserAuthService,private activatedRoute:ActivatedRoute,private router:Router){}

  async login(usernameOrEmail:string, password:string, callback?:()=>void){
   await this.authUserService.login(usernameOrEmail,password, ()=>{
this.authService.identityCheck();
console.log("Kullanıcı girişi başarılı")
this.activatedRoute.queryParams.subscribe(params=>{
  const returnUrl: string = params["returnurl"]
if(returnUrl){
  this.router.navigate([returnUrl])

}
})
   })

  }

}
