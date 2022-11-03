import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import appSlice from './App/appSlice';
import userSlice from './User/userSlice';


export const store = configureStore({
  reducer: {
    app: appSlice,
    user: userSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
  RootState,
  unknown,
  Action<string>>;
