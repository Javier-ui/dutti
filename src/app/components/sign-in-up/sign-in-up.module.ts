import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Components
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/_service/login.service';
import { RegisterComponent } from './register/register.component';
import { RegisterService } from './register/_service/register.service';
import { SignInUpRoutingModule } from './sign-in-up-routing.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    SignInUpRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [
    LoginService,
    RegisterService
  ],
})
export class SignInUpModule { }