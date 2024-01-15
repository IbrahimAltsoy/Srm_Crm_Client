import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { AdminModule } from './admin/admin.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { JwtModule } from '@auth0/angular-jwt';
import { FacebookLoginProvider, GoogleLoginProvider, GoogleSigninButtonModule, SocialAuthService, SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';
import { LoginModule } from './ui/components/login/login.module';
import { LoginComponent } from './ui/components/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiModule,
    AdminModule,
    BrowserAnimationsModule,
    NgbModule,
    RouterModule,
    HttpClientModule,
    MatButtonModule,
    SocialLoginModule,
    GoogleSigninButtonModule,
    JwtModule.forRoot({
      config: {
        tokenGetter:()=> localStorage.getItem("accessToken"),
        allowedDomains:["localhost:7201"]
      }
    })


  ],
  providers: [
    { provide: 'baseUrl', useValue: 'https://localhost:8080/api', multi: true },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '400125754780-1muhpent75v16jgp0e6v6381ri2fjb4q.apps.googleusercontent.com'
            )
          }
          // ,

        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig
    }
   // , {provide:HTTP_INTERCEPTORS, useClass:HttpErrorHandlerInterceptorService, multi:true}

],
  bootstrap: [AppComponent],



})
export class AppModule { }
