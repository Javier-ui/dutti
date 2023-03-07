import { inject, TestBed } from '@angular/core/testing';
import { LoginService } from '../../login/_service/login.service';
import { UserModel } from '../../_models/user.model';
import { RegisterService } from './register.service';


describe('RegisterService', () => {
  let service: RegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
      ],
      providers: [RegisterService, LoginService]
    });

    service = TestBed.inject(RegisterService);
  });

  it('RegisterService service should be created', inject([RegisterService], () => {
    expect(service).toBeTruthy();
  }));

  it('register should return a true if the user is not duplicated', inject([RegisterService], () => {
    localStorage.setItem('dutti-user-list', JSON.stringify([]));
    const user = new UserModel('Pepe', 'Pepe', 'Pepe', 'Pepe@pepe.com', '123456')
    service.register(user).subscribe((res) => {
      expect(res).toEqual(true);
    })
  }));

  it('register should return a false if the user is not duplicated', inject([RegisterService], () => {
    const user = new UserModel('Pepe', 'Pepe', 'Pepe', 'Pepe@pepe.com', '123456')
    localStorage.setItem('dutti-user-list', JSON.stringify([user]));
    service.register(user).subscribe((res) => {
      expect(res).toEqual(false);
    })
  }));
});
