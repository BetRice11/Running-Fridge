import { configureStore } from '@reduxjs/toolkit'
import queryReducer from './querySlice'
import { accountApi } from './apiSlice'

export default configureStore({
    reducer: {
        query: queryReducer,
        [accountApi.reducerPath]: accountApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(accountApi.middleware),
})

// Global state for entire app... create query or api in file and import into store
