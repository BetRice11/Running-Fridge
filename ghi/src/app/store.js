import { configureStore } from '@reduxjs/toolkit'

import { beverageApi } from './apiSlice';
import searchReducer from './searchSlice';


export const store = configureStore({
  reducer: {
    search: searchReducer, // front end state
    [beverageApi.reducerPath]: beverageApi.reducer // api state
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(beverageApi.middleware)
})
