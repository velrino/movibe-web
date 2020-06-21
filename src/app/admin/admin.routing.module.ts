import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Providers
import { AuthGuardService } from 'src/app/shared/services/auth/auth-guard.service';
import { AuthGuestService } from 'src/app/shared/services/auth/auth-guest.service';

// Components
import { AdminComponent } from './admin.component';
import { AdminFooterComponent } from './components/footer/footer.component';
import { AdminNavbarComponent } from './components/navbar/navbar.component';
import { AdminSidebarComponent } from './components/sidebar/sidebar.component';

// Pages
import { AdminBalladsPage } from './pages/ballads/ballads.page';
import { AdminHomePage } from './pages/home/home.page';
import { AdminLoginPage } from './pages/login/login.page';

const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        canActivate: [AuthGuardService],
        children: [
            { path: '', component: AdminHomePage },
            {
                path: 'ballads', children: [
                    { path: '', component: AdminBalladsPage },
                ]
            },
        ]
    },
    {
        path: 'auth',
        canActivate: [AuthGuestService],
        children: [
            { path: 'login', component: AdminLoginPage },
        ]
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

export const AdminComponents = [
    AdminComponent,
    AdminFooterComponent,
    AdminNavbarComponent,
    AdminSidebarComponent,
]

export const AdminPages = [
    ...AdminComponents,
    AdminHomePage,
    AdminLoginPage,
    AdminBalladsPage
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }