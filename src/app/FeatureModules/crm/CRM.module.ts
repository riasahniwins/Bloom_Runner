/*angular code modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

/* crm modules */
import { CRMRoutingModule } from './crm-routing.module';

/* feature and custom modules */
import { MaterialModule } from 'src/app/MaterialModule/Material.module';

/* ngrx */
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './State/ClientStore/Client.reducer';
import { ClientEffects } from './State/ClientStore/Client.effects';

/*services */
import { ClientService } from './Services/Client.service';

/* components */
import { UpdateClientComponent } from './Modals/update-client/update-client.component';
import { DeleteClientComponent } from './Modals/delete-client/delete-client.component';
import { CrmRoutingComponent } from './Components/Entry/crm-routing/crm-routing.component';
import { HomeComponent } from './Components/Home/home.component';
import { CrmDashboardComponent } from './Components/Dashboard/crm-dashboard/crm-dashboard.component';
import { RecipientListComponent } from './Components/Recipient/recipient-list/recipient-list.component';
import { AddClientComponent } from './Components/Client/AddClient/add-client.component';
import { ClientListComponent } from './Components/Client/ListClient/client-list.component';
import { DashboardWidgetsComponent } from './Components/Dashboard/dashboard-widgets/dashboard-widgets.component';

/*Third party modules */
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CRMResolver } from './RouteResolver/crm.route-resolver';


@NgModule({
  declarations: [RecipientListComponent, ClientListComponent, CrmDashboardComponent, AddClientComponent, UpdateClientComponent, DeleteClientComponent, CrmRoutingComponent, HomeComponent, DashboardWidgetsComponent],
  imports: [
    CommonModule,
    CRMRoutingModule,
    MaterialModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    StoreModule.forFeature("clients", reducer),
    EffectsModule.forFeature([ClientEffects]),
    InfiniteScrollModule
  ],
  providers: [
    ClientService, CRMResolver
  ],
})
export class CRMModule { }
