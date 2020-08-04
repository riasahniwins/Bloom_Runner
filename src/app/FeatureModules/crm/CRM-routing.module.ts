import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrmRoutingComponent } from './Components/Entry/crm-routing/crm-routing.component';
import { HomeComponent } from './Components/Home/home.component';
import { CrmDashboardComponent } from './Components/Dashboard/crm-dashboard/crm-dashboard.component';

import { RecipientListComponent } from './Components/Recipient/recipient-list/recipient-list.component';
import { ClientListComponent } from './Components/Client/ListClient/client-list.component';
import { AddClientComponent } from './Components/Client/AddClient/add-client.component';
import { CRMResolver } from './RouteResolver/crm.route-resolver';


const routes: Routes = [
  {
    path: "",
    component: CrmRoutingComponent,
    children: [
      {
        path: "",
        redirectTo: "home",
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'dashboard',
        component: CrmDashboardComponent
      },
      {
        path: 'client-list',
        component: ClientListComponent,
        resolve: CRMResolver
      },
      {
        path: 'recipient-list',
        component: RecipientListComponent
      },
      {
        path: 'add-client',
        component: AddClientComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CRMRoutingModule { }
