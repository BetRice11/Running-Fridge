import { configureStore } from '@reduxjs/toolkit'
import queryReducer from './querySlice'
import { accountApi } from './apiSlice'
import { fridgeApi } from './fridgeSlice'

export default configureStore({
    reducer: {
        query: queryReducer,
        [accountApi.reducerPath]: accountApi.reducer,
        [fridgeApi.reducerPath]: fridgeApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(accountApi.middleware, fridgeApi.middleware)
})

// Global state for entire app... create query or api in file and import into store
