import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminPannelComponent} from './admin-pannel/admin-pannel.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component: AdminPannelComponent,
  children: [
    {path: '', redirectTo: 'dashboard'},
    {path: 'dashboard', component: DashboardComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPannelRoutingModule { }
