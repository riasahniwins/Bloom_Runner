import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import * as clientActions from './Client.actions';
import * as snackBarActions from '../../../../Store/SnackBarReducer/Facade/SnackBar.Actions';
import { map, exhaustMap, startWith, catchError, switchMap, concatMap, tap, mergeMap, delay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ClientService } from '../../Services/Client.service';
import { of } from 'rxjs';
import * as msges from '../../Const/CrmMessage';
import { SnackBarModel, NotificationType } from 'src/app/Store/SnackBarReducer/Models/SnackBar.model';
@Injectable()
export class ClientEffects {
    

    constructor(private actions$: Actions,
        private service: ClientService,
        private router: Router) { }
    loadClients$ = createEffect(() => this.actions$.pipe(
        ofType(clientActions.ClientLoadRequest),
        startWith(clientActions.ClientLoadRequest),
        exhaustMap(() => this.service.GetClientData().pipe(
            switchMap((clients) => [
                clientActions.ClientsLoadedSuccess({ clients })
            ]), catchError((error: any) => of(clientActions.ClientsLoadedFailed(error)))
        ))), { dispatch: true })


    createClient$ = createEffect(() => this.actions$.pipe(
        ofType(clientActions.ClientPostRequest),
        map(action => action.client),
        switchMap((payload) => this.service.Add(payload).pipe(
            mergeMap((payload) => [
                clientActions.ClientsPostSuccess({ client: payload }),
                snackBarActions.ShowNotification({ payload: new SnackBarModel(msges.posted, NotificationType.Success) }),
                clientActions.HideLoader()
            ]), catchError((error: any) => of(clientActions.ClientsPostFailed(error)))
        ))
    ), { dispatch: true })
}