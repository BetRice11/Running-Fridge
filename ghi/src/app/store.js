import { configureStore } from '@reduxjs/toolkit';
import { beverageApi } from './apiSlice';
import searchReducer from './searchSlice';

const store = configureStore({
  reducer: {
    search: searchReducer,
    [beverageApi.reducerPath]: beverageApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(beverageApi.middleware)
});

export default store;
