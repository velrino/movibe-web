import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
    selector: 'app-admin-navbar',
    templateUrl: './navbar.component.html',
})
export class AdminNavbarComponent {
    constructor(private authService: AuthService, private router: Router) { }

    logout() {
        this.authService.logout();
        this.router.navigate(['admin/auth/login']);
    }
}
