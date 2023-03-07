import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LoginService } from '../sign-in-up/login/_service/login.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit, OnDestroy {
  logged = false;
  protected ngUnsubscribe: Subject<boolean> = new Subject();


  constructor(
    protected readonly login: LoginService,
    protected readonly router: Router,
  ) {
  }

  ngOnInit(): void {
    this.login.logged.pipe(takeUntil(this.ngUnsubscribe)).subscribe((result: boolean) => {
      this.logged = result;
      if (!this.logged) {
        this.router.navigateByUrl(``);
      } else {
        this.router.navigateByUrl(`ships`);
      }
    });
    this.login.validateLogin();
  }

  public logout() {
    this.login.logOut().pipe(takeUntil(this.ngUnsubscribe)).subscribe();
  }

  public ngOnDestroy(): void {
    this.ngUnsubscribe.next(true);
    this.ngUnsubscribe.complete();
  }
}
