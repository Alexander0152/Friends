import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store';

const appSelector = (state: RootState) => state.app;
export const selectIsAppLoading = createSelector(appSelector, (app) => app.loadingCount !== 0);