import { createSlice } from '@reduxjs/toolkit';

import { IAppStateType } from './appTypes';

const initialState: IAppStateType = {
    someField: true,
    loadingCount: 0
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        resetApp: () => initialState,
        increaseLoadingCount(state) {
            state.loadingCount = state.loadingCount + 1;
        },
        decreaseLoadingCount(state) {
            state.loadingCount = state.loadingCount - 1;
        },
    }
});

export const {
    increaseLoadingCount,
    decreaseLoadingCount,
    resetApp
} = appSlice.actions;

export default appSlice.reducer;

