import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { ListTransactionComponent } from './dashboard/list-transaction/list-transaction.component';
import { LoginComponent } from './auth/login/login.component';
import { ListMembersComponent } from './members/list-members/list-members.component';
import { ListAttendeeComponent } from './attendee/list-attendee/list-attendee.component';
import { NewTransactionComponent } from './dashboard/new-transaction/new-transaction.component';
import { UpdateTransactionComponent } from './dashboard/update-transaction/update-transaction.component';
import { ViewTransactionComponent } from './dashboard/view-transaction/view-transaction.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { NewAttendeeComponent } from './attendee/new-attendee/new-attendee.component';
import { ViewAttendeeComponent } from './attendee/view-attendee/view-attendee.component';
import { AttendeeComponent } from './attendee/attendee.component';

const routes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent, children: [
            {
                path: 'add',
                component: NewTransactionComponent,
            },
            {
                path: 'update',
                component: UpdateTransactionComponent,
            },
            {
                path: 'view',
                component: ViewTransactionComponent
            },
            {
                path: 'all',
                component: ListTransactionComponent
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'members',
        component: ListMembersComponent
    },
    {
        path: 'attendees',
        component: AttendeeComponent,
        children: [
            {
                path: 'add',
                component: NewAttendeeComponent
            }, {
                path: 'view/:id',
                component: ViewAttendeeComponent
            }
        ]
    },
    {
        path: '',
        redirectTo: '/dashboard/all',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes, {useHash: false})],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}