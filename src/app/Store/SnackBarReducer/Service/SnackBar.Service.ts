import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { SnackBarModel } from '../Models/SnackBar.model';
import { SnackbarComponent } from '../Component/snackbar/snackbar.component';
import { of } from 'rxjs';

@Injectable()
export class SnackBarService {
    constructor(private snackbar: MatSnackBar) { }

    public showSnackBar(payload: SnackBarModel) {
        this.snackbar.openFromComponent(SnackbarComponent, {
            data: { payload },
            duration: 3000
        })
        return of("success")
    }
    public hideSnackBar() {
        this.snackbar.dismiss();
    }
}