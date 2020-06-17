import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AdminHomePage } from './pages/home/home.page';

const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            { path: 'home', component: AdminHomePage },
        ]
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

export const AdminPages = [
    AdminComponent,
    AdminHomePage,
];

export const AdminBootstrap = [
    AdminComponent,
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }