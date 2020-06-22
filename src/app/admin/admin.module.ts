import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AdminPages, AdminRoutingModule } from './admin.routing.module';
// Providers
import { AuthGuardService } from 'src/app/shared/services/auth/auth-guard.service';
import { AuthGuestService } from 'src/app/shared/services/auth/auth-guest.service';

@NgModule({
    declarations: AdminPages,
    imports: [
        CommonModule,
        AdminRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [AuthGuardService, AuthGuestService]
})
export class AdminModule { }