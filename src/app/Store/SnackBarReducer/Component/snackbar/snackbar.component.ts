import { Component, OnInit, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { SnackBarModel } from '../../Models/SnackBar.model';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent {

  public notification: SnackBarModel;
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {
    this.notification = data.payload;
  }

}
