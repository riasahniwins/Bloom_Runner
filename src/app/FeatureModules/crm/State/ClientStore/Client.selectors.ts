/* ngrx core moduels */
import { ClientState, selectAll } from './Client.reducer';
import { createSelector, createFeatureSelector } from '@ngrx/store';

/* select clients */
export const courseFeatureSelector = createFeatureSelector<ClientState>('clients');

export const clients = createSelector(
  courseFeatureSelector,
  selectAll
)

export const areClientsLoaded = createSelector(
  courseFeatureSelector,
  (state) => state.isLoaded
)
export const isLoading = createSelector(
  courseFeatureSelector,
  (state) => state.isLoading
)

export const showError = createSelector(
  courseFeatureSelector,
  (state) => state.error
)
