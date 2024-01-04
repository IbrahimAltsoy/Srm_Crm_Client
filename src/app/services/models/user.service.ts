import { Injectable } from '@angular/core';
import { HttpClientService } from '../common/http-client.service';
import { User } from 'src/app/contracts/users/user';
import { Create_User } from 'src/app/contracts/users/CreateUser';
import { Observable, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httclient: HttpClientService) { }
  async create(user:User):Promise<Create_User>{
    const observable:Observable< User| Create_User> = this.httclient.post<User| Create_User>({
      controller:"user"
    },user);
return await firstValueFrom(observable) as Create_User
  }
}
