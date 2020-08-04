/* ngrx core modules */
import { createAction, props } from '@ngrx/store';

/* models */
import { Widget } from '../../Models/Widgets';

export const WidgetsLoadRequest = createAction("[Widget List] Widget GET Service Request");
export const WidgetsLoadedSuccess = createAction("[Widget List Component] Widgets loaded success", props<{ widgets: Widget[] }>());
export const WidgetsLoadedFailed = createAction("[Widget List Component] Widgets loaded Failed", props<{ error: any }>());



export const ShowLoader = createAction('[Utility] Show Loader');
export const HideLoader = createAction('[Utility] Show Loader');

export const courseActionTypes = {
    WidgetsLoadRequest, WidgetsLoadedSuccess, WidgetsLoadedFailed
} 