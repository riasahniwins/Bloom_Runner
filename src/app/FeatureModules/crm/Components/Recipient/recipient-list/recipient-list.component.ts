import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ClientService } from '../../../Services/Client.service';

@Component({
  selector: 'app-recipient-list',
  templateUrl: './recipient-list.component.html',
  styleUrls: ['./recipient-list.component.scss']
})
export class RecipientListComponent implements OnInit {

  dataSource = new MatTableDataSource();
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  displayedColumns: string[] = ['EmailId', 'FirstName', 'LastName', 'OccasionDate', 'Occasion', 'IsOurCustomer', 'LastConnect', 'Orders', 'Actions'];
  constructor(private clientService: ClientService) { }

  recipientsResponse: any;

  ngOnInit() {

    this.getAllRecipients();
  }

  getAllRecipients() {

    let paramValue = 9;
    let request = {
      "input": paramValue
    }

    this.clientService.GetRecipientData(request).subscribe(
      response => {
        this.recipientsResponse = JSON.parse(response.data[0].JSONResponse);
        this.dataSource.data = this.recipientsResponse;
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
