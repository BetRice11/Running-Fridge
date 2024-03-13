import { configureStore } from '@reduxjs/toolkit'
import queryReducer from './querySlice'
import { fridgeApi } from './apiSlice'

export default configureStore({
    reducer: {
        query: queryReducer,
        [fridgeApi.reducerPath]: fridgeApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(fridgeApi.middleware)
})
