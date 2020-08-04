import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Client } from '../../../Models/Clients';
import { ClientService } from '../../../Services/Client.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ClientState } from '../../../State/ClientStore/Client.reducer';
import * as clientActions from '../../../State/ClientStore/Client.actions'


@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {
  public usersData: Client = new Client();
  constructor(
    private store: Store<ClientState>) { }

  ngOnInit(): void {
  }

  addClient(form: NgForm) {
    
    let client: Client = this.usersData;
    client = this.usersData;
    this.store.dispatch(clientActions.ClientPostRequest({ client }))
  }

}
