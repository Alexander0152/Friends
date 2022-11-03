import { createSlice } from '@reduxjs/toolkit';
import { IUserStateType } from './userTypes';

const initialState: IUserStateType = {
  user: null,
  isAuthenticated: true,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuth(state, { payload }) {
      state.isAuthenticated = payload;
    },
    resetUser: () => initialState
  }
});

export const { setAuth, resetUser } = userSlice.actions;
export default userSlice.reducer;
