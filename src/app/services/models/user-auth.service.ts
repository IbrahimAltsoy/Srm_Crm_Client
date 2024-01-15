import { Injectable } from '@angular/core';
import { HttpClientService } from '../common/http-client.service';
import { Observable, firstValueFrom } from 'rxjs';
import { TokenResponse } from 'src/app/contracts/token/tokenResponse';
import { SocialUser } from '@abacritt/angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  // authService: any;
  // activatedRoute: any;
  constructor(private httpClient: HttpClientService) { }
  async login(userNameOrEmail: string,password: string, callBack?:()=>void):Promise<any> {
    const observable: Observable<any | TokenResponse> = this.httpClient.post<any | TokenResponse>({
      controller:"auth",
      action:"login"
    },{userNameOrEmail, password})
    const tokenResponse: TokenResponse =await firstValueFrom(observable) as TokenResponse;
    if(tokenResponse){

      localStorage.setItem("accessToken", tokenResponse.token.accessToken)
      localStorage.setItem("refreshToken", tokenResponse.token.refreshToken)

    }
    callBack();
  }
  async refreshTokenLogin(refreshToken:string, callBack?:(state)=>void):Promise<any>{
    const observable :Observable<any | TokenResponse> = await this.httpClient.post({
      controller:"auth",
      action: "refreshtokenlogin"
    }, {refreshToken: refreshToken})

    try {
      const tokenResponse: TokenResponse = await firstValueFrom(observable) as TokenResponse
    if(tokenResponse){
      localStorage.setItem("accessToken", tokenResponse.token.accessToken);
              localStorage.setItem("refreshToken", tokenResponse.token.refreshToken);
              callBack(refreshToken?true:false);
    }

    } catch  {
      callBack(false);
    }



          }
  async passwordReset(email: string, callBack?: () => void) {
            const observable: Observable<any> = this.httpClient.post({
              controller: "auth",
              action: "password-reset"
            }, { email: email });

            await firstValueFrom(observable);
            callBack();
          }
  async verifyResetToken(resetToken:string, userId:string, callBack?:()=>void):Promise<boolean>{
    const observable:Observable<any> = await this.httpClient.post({
      controller:"auth",
      action:"verify-reset-token"
    },{
      resetToken:resetToken,
      userId:userId
    })
  const state:boolean =  await firstValueFrom(observable);
    callBack();
    return state;
  };


  async googleLogin(user: SocialUser, succesBack?:()=>void, callBack?:()=>void):Promise<any>{
    const observable: Observable<SocialUser | TokenResponse> = this.httpClient.post<SocialUser | TokenResponse>({
      action: "google-login",
      controller: "auth"
    }, user);


    const tokenResponse: TokenResponse = await firstValueFrom(observable) as TokenResponse;
    if(tokenResponse){
      localStorage.setItem("accessToken", tokenResponse.token.accessToken);
      localStorage.setItem("refreshToken", tokenResponse.token.refreshToken);

    }
   // callBack();

  }
  }

