import { Component, OnInit, Input, EventEmitter, Output, SimpleChange, ViewChild } from '@angular/core';
import { ClientService } from '../../../Services/Client.service';
import { MatTableDataSource } from '@angular/material/table';
import { Client, ClientList } from '../../../Models/Clients';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {
  @Input() result: Array<Client>;
  @Input() public isLoading: boolean;
  // public dataSource: MatTableDataSource<ClientList>;
  dataSource = new MatTableDataSource();
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  displayedColumns: string[] = ['EmailId', 'FirstName', 'LastName', 'CreatedDate', 'Status', 'LastPurchase', 'LastConnect', 'NoOfRecipients', 'NoOfSubscriptions', 'LTV', 'HistoricalOrders', 'UpcomingOrders', 'OrderAmount', 'Actions'];
  constructor(private clientService: ClientService) { }

  clientInformation: any;
  clientsResponse: any;

  ngOnInit() {

    this.getAllClients();
  }
  // ngOnChanges(changes: { any: SimpleChange }) {
  //   
  //   if (changes['result']["currentValue"]) {
  //     this.dataSource = new MatTableDataSource(this.result);
  //     this.dataSource.sort = this.sort;
  //   }
  // }

  getAllClients() {

    let paramValue = 8;
    let request = {
      "input": paramValue
    }

    this.clientService.GetData(request).subscribe(
      response => {
        this.clientsResponse = JSON.parse(response.data[0].JSONResponse);
        this.dataSource.data = this.clientsResponse;
        this.dataSource.sort = this.sort;

      },
      error => {
        console.log('Error', error);


      }
    );
  }
  applyFilter(event: Event) {

    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue;
  }

}
