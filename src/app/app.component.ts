import { Component, OnInit } from '@angular/core';

import users from 'src/assets/json/users.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'massimo-dutti';
  ngOnInit(): void {
    //Create default userlist in localstorage
    if (localStorage.getItem('dutti-user-list') === null) {
      localStorage.setItem('dutti-user-list', JSON.stringify(users));
    }
  }

}
