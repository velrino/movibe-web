import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
    selector: 'app-admin-sidebar',
    templateUrl: './sidebar.component.html',
})
export class AdminSidebarComponent {

    constructor(private authService: AuthService, private router: Router) { }

    logout() {
        this.authService.logout();
        this.router.navigate(['admin/auth/login']);
    }
}
