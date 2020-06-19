import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuestService implements CanActivate {
    constructor(public auth: AuthService, public router: Router) { }

    canActivate(): boolean {
        if (this.auth.isLoggedIn()) {
            this.router.navigate(['admin']);
            return false;
        }
        return true;
    }
}
