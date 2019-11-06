import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { NewTransactionComponent } from './dashboard/new-transaction/new-transaction.component';
import { UpdateTransactionComponent } from './dashboard/update-transaction/update-transaction.component';
import { ListTransactionComponent } from './dashboard/list-transaction/list-transaction.component';
import { ViewTransactionComponent } from './dashboard/view-transaction/view-transaction.component';
import { LoginComponent } from './auth/login/login.component';
import { AddMembersComponent } from './members/add-members/add-members.component';
import { UpdateMembersComponent } from './members/update-members/update-members.component';
import { ViewMembersComponent } from './members/view-members/view-members.component';
import { NewAttendeeComponent } from './attendee/new-attendee/new-attendee.component';
import { UpdateAttendeeComponent } from './attendee/update-attendee/update-attendee.component';
import { ListAttendeeComponent } from './attendee/list-attendee/list-attendee.component';
import { ViewAttendeeComponent } from './attendee/view-attendee/view-attendee.component';
import { TopNavBarComponent } from './header/top-nav-bar/top-nav-bar.component';
import { ListMembersComponent } from './members/list-members/list-members.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { TransactionSummaryComponent } from './dashboard/transaction-summary/transaction-summary.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { InprogressComponent } from './shared/components/inprogress/inprogress.component';
import { FooterComponent } from './footer/footer/footer.component';
import { PaginationComponent } from './dashboard/pagination/pagination.component';
import { FilterRecordPipe } from './shared/pipes/filter-record.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AttendeeComponent } from './attendee/attendee.component';
import { TotalPerTypeComponent } from './dashboard/total-per-type/total-per-type.component';

@NgModule({
  declarations: [
    AppComponent,
    NewTransactionComponent,
    UpdateTransactionComponent,
    ListTransactionComponent,
    ViewTransactionComponent,
    LoginComponent,
    AddMembersComponent,
    UpdateMembersComponent,
    ViewMembersComponent,
    NewAttendeeComponent,
    UpdateAttendeeComponent,
    ListAttendeeComponent,
    ViewAttendeeComponent,
    TopNavBarComponent,
    ListMembersComponent,
    DashboardComponent,
    TransactionSummaryComponent,
    LoaderComponent,
    InprogressComponent,
    FooterComponent,
    PaginationComponent,
    FilterRecordPipe, 
    AttendeeComponent, 
    TotalPerTypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
