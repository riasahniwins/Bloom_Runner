import { createAction, props } from "@ngrx/store";
import { SnackBarModel } from '../Models/SnackBar.model';

export const ShowNotification = createAction("[Notification] Show SnackBar", props<{ payload: SnackBarModel }>());
export const HideNotification = createAction("[Notification] Hide SnackBar");
