import { createSlice } from '@reduxjs/toolkit';

import { IAppStateType } from './appTypes';

const initialState: IAppStateType = {
    someField: true
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        resetApp: () => initialState,
    }
});

export const {
    resetApp
} = appSlice.actions;

export default appSlice.reducer;

