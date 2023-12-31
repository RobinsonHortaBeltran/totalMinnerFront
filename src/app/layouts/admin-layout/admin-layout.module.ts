import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { UsersComponent } from "../../pages/users/users.component";
import { NewCampaingComponent } from "../../pages/icons/new-campaing/new-campaing.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ListCampaingComponent} from "../../pages/icons/list-campaing/list-campaing.component";
import {ListUserComponent} from '../../pages/users/list-user/list-user.component';
import {ListPaymentsUserComponent} from '../../pages/users/list-payments-user/list-payments-user.component';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    ReactiveFormsModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    UsersComponent,
    NewCampaingComponent,
    ListCampaingComponent,
    ListUserComponent,
    ListPaymentsUserComponent,
  ],
})
export class AdminLayoutModule {}
