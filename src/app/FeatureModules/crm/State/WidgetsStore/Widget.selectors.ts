/* ngrx core moduels */
import { WidgetState, selectAll } from './Widget.reducer';
import { createSelector, createFeatureSelector } from '@ngrx/store';

/* select widgets */
export const courseFeatureSelector = createFeatureSelector<WidgetState>('widgets');

export const widgets = createSelector(
  courseFeatureSelector,
  selectAll
)

export const areWidgetsLoaded = createSelector(
  courseFeatureSelector,
  (state) => state.isWidgetLoaded
)
export const isLoading = createSelector(
  courseFeatureSelector,
  (state) => state.isWidgetLoading
)

export const showError = createSelector(
  courseFeatureSelector,
  (state) => state.error
)
