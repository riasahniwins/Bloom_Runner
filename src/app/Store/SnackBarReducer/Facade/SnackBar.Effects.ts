import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SnackBarService } from '../Service/SnackBar.Service';
import * as snackBarActions from './SnackBar.Actions';
import { tap, delay, map, switchMap, mapTo, concatMapTo } from 'rxjs/operators';
import { SnackBarModel } from '../Models/SnackBar.model';
import { of } from 'rxjs';
@Injectable()
export class SnackBarEffects {
    constructor(private actions$: Actions, private service: SnackBarService) { }

    openSnackBar$ = createEffect(() => this.actions$.pipe(
        ofType(snackBarActions.ShowNotification),
        map(action => action.payload),
        tap((payload) => { this.service.showSnackBar(payload) })
    ), { dispatch: false });
    
    closeSnackBar$ = createEffect(() => this.actions$.pipe(
        ofType(snackBarActions.HideNotification),
        tap(() => this.service.hideSnackBar())
    ), { dispatch: false });
}