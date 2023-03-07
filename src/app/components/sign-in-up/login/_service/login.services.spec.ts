import { inject, TestBed } from '@angular/core/testing';
import { UserModel } from '../../_models/user.model';

import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
      ],
      providers: [LoginService]
    });

    service = TestBed.inject(LoginService);
  });

  it('LoginService service should be created', inject([LoginService], () => {
    expect(service).toBeTruthy();
  }));

  it('If login is correct will generate logged-user localstorage', inject([LoginService], () => {
    const user = new UserModel('Pepe', 'Pepe', 'Pepe', 'Pepe@pepe.com', '123456')
    localStorage.setItem('dutti-user-list', JSON.stringify([user]));
    localStorage.removeItem('logged-user');
    service.logIn(user.username, user.password).subscribe((res) => {
      expect(user.username).toEqual(localStorage.getItem('logged-user'));
    })
  }));

  it('If login is incorrect logged-user should not exist in localstorage', inject([LoginService], () => {
    const user = new UserModel('Pepe', 'Pepe', 'Pepe', 'Pepe@pepe.com', '123456')
    localStorage.setItem('dutti-user-list', JSON.stringify([]));
    localStorage.removeItem('logged-user');
    service.logIn(user.username, user.password).subscribe((res) => {
      expect(null).toEqual(localStorage.getItem('logged-user'));
    })
  }));

});
