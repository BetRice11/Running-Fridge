import { configureStore } from '@reduxjs/toolkit';
import queryReducer from './querySlice';
import { accountApi } from './apiSlice';
import { fridgeApi } from './fridgeSlice';
import userReducer from './userSlice';
import itemsReducer from './itemSlice'

export const store = configureStore({
  reducer: {
    query: queryReducer,
    [accountApi.reducerPath]: accountApi.reducer,
    [fridgeApi.reducerPath]: fridgeApi.reducer,
        items: itemsReducer,
    user: userReducer, // Add the user reducer to the store's reducers
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(accountApi.middleware, fridgeApi.middleware),
});

export default store;
