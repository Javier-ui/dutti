import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, of } from 'rxjs';
import { UserModel } from '../../_models/user.model';


@Injectable()
export class LoginService {
  constructor(
  ) { }

  logged = new BehaviorSubject<boolean>(false);

  logIn(user: string, password: string): Observable<boolean> {
    const users = JSON.parse(localStorage.getItem('dutti-user-list')) as Array<UserModel>;
    let userLogged = users.find(x => x.username === user && x.password === password);
    if (userLogged) {
      localStorage.setItem('logged-user', userLogged.username);
      this.logged.next(true);
    }
    return of(userLogged !== undefined);
  }

  logOut(): Observable<boolean> {
    let status = false
    localStorage.removeItem('logged-user')
    this.logged.next(false);
    return of(status);
  }

  validateLogin() {
    const users = JSON.parse(localStorage.getItem('dutti-user-list')) as Array<UserModel>;
    this.logged.next(users.find(x => x.username === localStorage.getItem('logged-user')) !== undefined);
  }
}
