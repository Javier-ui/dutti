import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';


import { LoginComponent } from './login.component';
import { LoginService } from './_service/login.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        FormsModule,
        RouterTestingModule.withRoutes([]),
        ReactiveFormsModule],
      providers: [
        LoginService
      ]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Correct login should navigate to principal', () => {
    component.loginForm.setValue({ username: 'user123', password: '123456' });
    spyOn<any>(component['loginService'], 'logIn').and.returnValue(of(true));
    const spy = spyOn<any>(component['router'], 'navigateByUrl');
    component.loginUser();
    expect(spy).toHaveBeenCalledWith(`/principal`);
  });

  it('Wrong login should change unregistered to true', () => {
    spyOn<any>(component['loginService'], 'logIn').and.returnValue(of(true));
    component.loginUser();
    expect(component.unregistered).toEqual(false);
  });
});
