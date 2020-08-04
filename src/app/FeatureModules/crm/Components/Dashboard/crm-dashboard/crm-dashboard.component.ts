import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Client } from '../../../Models/Clients';
import { Store } from '@ngrx/store';
import { ClientState } from '../../../State/ClientStore/Client.reducer';
import { clients, areClientsLoaded, isLoading } from '../../../State/ClientStore/Client.selectors';
import { BaseComponent } from 'src/app/BaseModule/BaseComponent';

@Component({
  selector: 'app-crm-dashboard',
  templateUrl: './crm-dashboard.component.html',
  styleUrls: ['./crm-dashboard.component.scss']
})
export class CrmDashboardComponent extends BaseComponent implements OnInit {

  /* models and properties */
  clients$: Observable<any>;
  isLoaded$: Observable<boolean>;
  isLoading$: Observable<boolean>;

  constructor(
    private router: Router,
    private store: Store<ClientState>,
  ) {
    super();
  }

  ngOnInit(): void {
    this.getClients();
  }

  /*Add client function call */
  public addClient(): void {
    this.router.navigateByUrl('/add-client');
  }
  /*Get all clients list */
  getClients(): void {
    
    this.clients$ = this.store.select(clients);
    this.isLoaded$ = this.store.select(areClientsLoaded);
    this.isLoading$ = this.store.select(isLoading);
  }
  /* scroll method */
  onScroll() {
    this.getClients();
  }

}
