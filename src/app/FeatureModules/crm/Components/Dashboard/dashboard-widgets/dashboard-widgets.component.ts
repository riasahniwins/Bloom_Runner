import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { Widget } from '../../../Models/Widgets';
import { ClientService } from '../../../Services/Client.service';

@Component({
  selector: 'app-dashboard-widgets',
  templateUrl: './dashboard-widgets.component.html',
  styleUrls: ['./dashboard-widgets.component.scss']
})
export class DashboardWidgetsComponent implements OnInit {
  widgetsResponse: any;
  week: boolean = true;
  month: boolean = false;
  year: boolean = false;
  loading: boolean = false;

  constructor(private clientService: ClientService) { }
  ngOnInit() {
    this.bindWidgetData(4)
  }
  getDataByView(number) {
    this.bindWidgetData(number);
    switch (number) {
      case 4: this.week = true;
        this.month = false;
        this.year = false;
        break;
      case 5: this.week = false;
        this.month = true;
        this.year = false;
        break;

      case 6: this.week = false;
        this.month = false;
        this.year = true;
        break;

    }
  }
  bindWidgetData(tabNumber) {
    let request = {
      "input": tabNumber
    }
    this.loading = true;
    this.clientService.GetData(request).subscribe(
      response => {
        this.widgetsResponse = JSON.parse(response.data[0].JSONResponse);
        this.loading = false;
      },
      error => {
        console.log('Error', error);
        this.loading = false;

      }
    );
  }
}
