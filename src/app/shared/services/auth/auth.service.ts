import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AuthService {

    index = 'auth';

    constructor() { }

    clear() {
        localStorage.clear();
    }

    isLoggedIn() {
        return (localStorage.getItem(this.index));
    }

    login() {
        const mock = { user: 'lorem' }
        localStorage.setItem(this.index, JSON.stringify(mock));
    }

    logout() {
        localStorage.removeItem(this.index);
    }
}
