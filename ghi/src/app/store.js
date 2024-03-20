import { configureStore } from '@reduxjs/toolkit';
import queryReducer from './querySlice';
import { accountApi } from './apiSlice';
import { fridgeApi } from './fridgeSlice';
// import userReducer from './userSlice';
import itemsReducer from './itemSlice'

export default configureStore({
  reducer: {
    query: queryReducer,
    [accountApi.reducerPath]: accountApi.reducer,
    [fridgeApi.reducerPath]: fridgeApi.reducer,
        // items: itemsReducer,
    // [userApi.ReducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(accountApi.middleware, fridgeApi.middleware),
})
