import { configureStore, createSlice } from '@reduxjs/toolkit';

/** Placeholder so `combineReducers` is valid; replace or extend when you add real slices. */
const appSlice = createSlice({
  name: 'app',
  initialState: {} as Record<string, never>,
  reducers: {},
});

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
