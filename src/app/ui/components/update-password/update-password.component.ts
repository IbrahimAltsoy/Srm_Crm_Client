import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/models/user-auth.service';
import { UserService } from 'src/app/services/models/user.service';

@Component({
  selector: 'app-update-password',
  standalone: true,
  imports: [],
  templateUrl: './update-password.component.html',
  styleUrl: './update-password.component.css'
})
export class UpdatePasswordComponent implements OnInit{
  constructor(private userAuthService: UserAuthService, private activatedRoute: ActivatedRoute, private userService: UserService, private router: Router){

  }
  ngOnInit(): void {

    // this.activatedRoute.params.subscribe({
    //   next: async params => {
    //     const userId: string = params["userId"];
    //     const resetToken: string = params["resetToken"];
    //     this.state = await this.userAuthService.verifyResetToken(resetToken, userId, () => {
    //      console.log("şifre güncellendi");
    //     })
    //   }
    // });
  }


}
