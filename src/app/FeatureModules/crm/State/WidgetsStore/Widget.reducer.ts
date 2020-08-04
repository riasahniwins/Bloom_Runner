/* ngrx core modules */
import { createReducer, on, State, Action } from "@ngrx/store";
import * as widgetActions from './Widget.actions';
import { EntityState, EntityAdapter, createEntityAdapter, Update } from '@ngrx/entity';
import { Widget } from './Widget.state';

/* models */
export interface WidgetState extends EntityState<Widget> {
    isWidgetLoaded?: boolean;
    error?: string;
    isWidgetLoading: boolean;
}

/* create entity adaptor instance */
export const adapter: EntityAdapter<Widget> = createEntityAdapter<Widget>({
    selectId: entity => entity.id,
    sortComparer: (l: Widget, r: Widget) => l.id.toString().localeCompare(r.id.toString())
})

/* initial state */
export const initialState: WidgetState = adapter.getInitialState({
    isWidgetLoaded: false,
    isWidgetLoading: false,
    error: null,
});

/* create reducer */
export const reducer = createReducer(
    initialState,
    on(widgetActions.WidgetsLoadRequest, (state, action) => {
        return { ...state, isLoaded: false }
    }),
    on(widgetActions.WidgetsLoadedSuccess, (state, action) => {
        return adapter.addAll(action.widgets, { ...state, isLoaded: true })
    }),
    on(widgetActions.WidgetsLoadedFailed, (state, action) => {
        return { ...state, isLoaded: false, error: action.error }
    }),

    on(widgetActions.ShowLoader, (state, action) => {
        return { ...state, isLoaded: true, isLoading: true }
    }),
    on(widgetActions.HideLoader, (state, action) => {
        return { ...state, isLoaded: true, isLoading: false }
    })
);

export const { selectAll, selectIds } = adapter.getSelectors();