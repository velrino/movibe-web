import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class AdminLoginPage {

  constructor(private authService: AuthService, public router: Router) { }

  submit() {
    this.authService.login();
    this.router.navigate(['admin']);
  }
}
