import { Component } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  isAuthenticate: boolean = false;
  isSubmit: boolean = false;
  username!: string;

  Data!:Data[];




  check(username: string, password: string) {
    if ((username === 'admin' && password === 'admin')||(username === 'student' && password === 'student')) {
      this.isAuthenticate = true;
      this.isSubmit = true;
      this.username = username;
    } else {
      alert("Please verify username or password");
      this.isAuthenticate = false;
      this.isSubmit = false;
    }
  }

}
