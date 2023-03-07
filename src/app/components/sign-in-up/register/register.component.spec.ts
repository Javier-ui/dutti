
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { PrincipalComponent } from '../../principal/principal.component';
import { LoginService } from '../login/_service/login.service';
import { RegisterComponent } from './register.component';
import { RegisterService } from './_service/register.service';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [
        FormsModule,
        RouterTestingModule.withRoutes([{ path: 'principal', redirectTo: '' }]),
        ReactiveFormsModule],
      providers: [
        RegisterService, LoginService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Correct register should set userDuplicated to false', () => {
    component.userDuplicated = true;
    component.registerForm.setValue({ username: 'user123', password: '123456', email: 'email@email', first_name: 'first_name', last_name: 'lastName' });
    spyOn<any>(component['registerService'], 'register').and.returnValue(of(true));
    component.registerUser();
    expect(component.userDuplicated).toEqual(false);
  });

  it('Wrong register should set userDuplicated to true', () => {
    component.registerForm.setValue({ username: 'user123', password: '123456', email: 'email@email', first_name: 'first_name', last_name: 'lastName' });
    spyOn<any>(component['registerService'], 'register').and.returnValue(of(false));
    spyOn
    component.registerUser();
    expect(component.userDuplicated).toEqual(true);
  });
});
