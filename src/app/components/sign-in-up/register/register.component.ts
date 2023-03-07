import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

// JSON
import usersList from 'src/assets/json/users.json';
import { UserModel } from '../_models/user.model';
import { RegisterService } from './_service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  dataLoading: boolean = false;
  userDuplicated: boolean = false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private readonly registerService: RegisterService,
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      first_name: ['', [Validators.required, Validators.minLength(3)]],
      last_name: ['', [Validators.required, Validators.minLength(3)]],
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  registerUser() {
    if (this.registerForm.invalid) { return }
    this.registerService.register(this.registerForm.value as UserModel).subscribe(x => {
      if (x) {
        this.userDuplicated = false;
        this.router.navigateByUrl(`/principal`);
      } else {
        this.userDuplicated = true;
      }
    })
  }

}
