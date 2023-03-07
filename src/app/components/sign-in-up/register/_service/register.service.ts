import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, of } from 'rxjs';
import { LoginService } from '../../login/_service/login.service';
// JSON
import { UserModel } from '../../_models/user.model';


@Injectable()
export class RegisterService {
  constructor(
    private readonly loginService: LoginService
  ) { }


  register(user: UserModel): Observable<boolean> {
    const users = JSON.parse(localStorage.getItem('dutti-user-list')) as Array<UserModel>;

    let userDuplicated = users.find(x => x.username === user.username || x.email === user.email);
    if (userDuplicated === undefined) {
      users.push(user);
      localStorage.setItem('dutti-user-list', JSON.stringify(users));
      this.loginService.logIn(user.username, user.password);
    }
    return of(userDuplicated === undefined);
  }

}
