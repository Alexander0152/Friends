import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IFriend, IFriendDetails, IFriendsStateType } from './friendsTypes';
import { getFriendDetailsThunk, getFriendsThunk } from './friendsThunk';

const initialState: IFriendsStateType = {
    friendsList: [],
    currentFriendId: null,
    currentFriendDetails: null
};

const friendsSlice = createSlice({
    name: 'friends',
    initialState,
    reducers: {
        setCurrentFriendId(state, { payload }: PayloadAction<number>) {
            state.currentFriendId = payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getFriendsThunk.fulfilled, (state, { payload }: PayloadAction<IFriend[]>) => {
                state.friendsList = payload;
            })
            .addCase(getFriendDetailsThunk.fulfilled, (state, { payload }: PayloadAction<IFriendDetails>) => {
                state.currentFriendDetails = payload;
            })
    }
});

export const {
    setCurrentFriendId
} = friendsSlice.actions;

export default friendsSlice.reducer;

