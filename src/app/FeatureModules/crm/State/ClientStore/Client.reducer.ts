/* ngrx core modules */
import { createReducer, on, State, Action } from "@ngrx/store";
import * as clientActions from './Client.actions';
import { EntityState, EntityAdapter, createEntityAdapter, Update } from '@ngrx/entity';
import { Client } from './client.state';



/* models */
export interface ClientState extends EntityState<Client> {
    isLoaded?: boolean;
    error?: string;
    isLoading: boolean;
}

/* create entity adaptor instance */
export const adapter: EntityAdapter<Client> = createEntityAdapter<Client>({
    selectId: entity => entity.id,
    sortComparer: (l: Client, r: Client) => l.id.toString().localeCompare(r.id.toString())
})

/* initial state */
export const initialState: ClientState = adapter.getInitialState({
    isLoaded: false,
    isLoading: false,
    error: null,
});

/* create reducer */
export const reducer = createReducer(
    initialState,
    on(clientActions.ClientLoadRequest, (state, action) => {
        return { ...state, isLoaded: false }
    }),
    // on(clientActions.ClientsLoadedSuccess, (state, action) => {
    //     return adapter.addAll(action.clients, { ...state, isLoaded: true })
    // }),
    on(clientActions.ClientsLoadedFailed, (state, action) => {
        return { ...state, isLoaded: false, error: action.error }
    }),
    on(clientActions.ClientsPostSuccess, (state, action) => {
        return adapter.addOne(action.client, state)
    }),
    on(clientActions.ClientsPostFailed, (state, action) => {
        return { ...state, isLoaded: false, error: action.error }
    }),
    on(clientActions.ClientDeleteSuccess, (state, action) => {
        return adapter.removeOne(action.clientId, state)
    }),
    on(clientActions.ClientDeleteFailed, (state, action) => {
        return { ...state, isLoaded: false, error: action.error }
    }),
    on(clientActions.ClientUpdateSuccess, (state, action) => {
        const update: Update<Client> = {
            id: action.payload.id,
            changes: {
                ...action.payload,
            }
        };
        return adapter.updateOne(update, state)
    }),
    on(clientActions.ClientUpdateFailed, (state, action) => {
        return { ...state, isLoaded: false, error: action.error?.message }
    }),
    on(clientActions.ShowLoader, (state, action) => {
        return { ...state, isLoaded: true, isLoading: true }
    }),
    on(clientActions.HideLoader, (state, action) => {
        return { ...state, isLoaded: true, isLoading: false }
    })
);

export const { selectAll, selectIds } = adapter.getSelectors();