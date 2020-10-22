import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPannelRoutingModule } from './admin-pannel-routing.module';
import { AdminPannelComponent } from './admin-pannel/admin-pannel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModulesModule } from '../shared';

@NgModule({
  declarations: [AdminPannelComponent, DashboardComponent],
  imports: [
    CommonModule,
    AdminPannelRoutingModule,
    SharedModulesModule
  ]
})
export class AdminPannelModule { }
