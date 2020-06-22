import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
    selector: 'app-admin-sidebar',
    templateUrl: './sidebar.component.html',
})
export class AdminSidebarComponent {
    actualPath: string = null;
    basePath: string = '/admin';

    constructor(private authService: AuthService, private router: Router) { }

    menu = [
        { name: 'Dashboard', route: '', icon: "nc-icon nc-chart-pie-35" },
        { name: 'Baladas', route: '/ballads', icon: "fas fa-glass-cheers" }
    ]

    setActualPath() {
        this.actualPath = this.router.url;
    }

    isActualPath(route: string) {
        this.setActualPath();
        return (this.actualPath === this.basePath.concat(route));
    }

    navigate(route: string) {
        this.router.navigate([this.basePath.concat(route)]);
    }

    logout() {
        this.authService.logout();
        this.router.navigate(['admin/auth/login']);
    }
}
