/* ngrx core modules */
import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

/* models */
import { Client, ClientList } from '../../Models/Clients';

export const ClientLoadRequest = createAction("[Client List] Client GET Service Request");
export const ClientsLoadedSuccess = createAction("[Client List Component] Clients loaded success", props<{ clients: ClientList[] }>());
export const ClientsLoadedFailed = createAction("[Client List Component] Clients loaded Failed", props<{ error: any }>());

export const ClientPostRequest = createAction("[Client Effect] Client POST Api Request", props<{ client: Client }>());
export const ClientsPostSuccess = createAction("[Client List Component] Client Post Success", props<{ client: Client }>());
export const ClientsPostFailed = createAction("[Client List Component] Client Post Failed", props<{ error: any }>());


export const ClientDeleteRequest = createAction("[Client List Components] Client Delete Api Request", props<{ clientId: number }>());
export const ClientDeleteSuccess = createAction("[Client List Components] Delete Client Success", props<{ clientId: number }>());
export const ClientDeleteFailed = createAction("[Client List Components] Delete Client Failed", props<{ error: any }>());

export const ClientUpdateRequest = createAction("[Client List Component] Client Update Api Request", props<{ update: Update<Client> }>());
export const ClientUpdateSuccess = createAction("[Client List Component] Update Client Success", props<{ payload: Client }>());
export const ClientUpdateFailed = createAction("[Client List Component] Update Client Failed", props<{ error: any }>());

export const ShowLoader = createAction('[Utility] Show Loader');
export const HideLoader = createAction('[Utility] Show Loader');

export const courseActionTypes = {
    ClientLoadRequest, ClientsLoadedSuccess, ClientsLoadedFailed,
    ClientPostRequest, ClientsPostSuccess, ClientsPostFailed,
    ClientDeleteRequest, ClientDeleteSuccess, ClientDeleteFailed,
    ClientUpdateRequest, ClientUpdateSuccess, ClientUpdateFailed,
} 