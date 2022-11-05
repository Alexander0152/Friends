import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IFriend, IFriendsStateType } from './friendsTypes';
import { getFriendsThunk } from './friendsThunk';

const initialState: IFriendsStateType = {
    friendsList: [],
    currentFriendId: null
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
    }
});

export const {
    setCurrentFriendId
} = friendsSlice.actions;

export default friendsSlice.reducer;

