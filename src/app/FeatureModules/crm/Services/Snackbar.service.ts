import { Inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class SnackbarService {
    constructor(private snackbar: MatSnackBar) { }

    public showSnackbar() {
        this.snackbar.open("Client updated successfully", "success");
    }
}