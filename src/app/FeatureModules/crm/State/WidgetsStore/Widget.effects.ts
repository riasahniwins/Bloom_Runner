import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import * as widgetActions from './Widget.actions';
import * as snackBarActions from '../../../../Store/SnackBarReducer/Facade/SnackBar.Actions';
import { map, exhaustMap, startWith, catchError, switchMap, concatMap, tap, mergeMap, delay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ClientService } from '../../Services/Client.service';
import { of } from 'rxjs';
import * as msges from '../../Const/CrmMessage';
import { SnackBarModel, NotificationType } from 'src/app/Store/SnackBarReducer/Models/SnackBar.model';
@Injectable()
export class WidgetEffects {

    constructor(private actions$: Actions,
        private service: ClientService,
        private router: Router) { }

    // loadWidgets$ = createEffect(() => this.actions$.pipe(
    //     ofType(widgetActions.WidgetsLoadRequest),
    //     startWith(widgetActions.WidgetsLoadRequest),
    //     exhaustMap(() => this.service.GetData(4).pipe(
    //         switchMap((widgets) => [
    //             widgetActions.WidgetsLoadedSuccess({ widgets })
    //         ]), catchError((error: any) => of(widgetActions.WidgetsLoadedFailed(error)))
    //     ))), { dispatch: true })


}