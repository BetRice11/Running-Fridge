import { configureStore } from '@reduxjs/toolkit'
import queryReducer from './querySlice'

export const store = configureStore({
    reducer: {
        query: queryReducer
    },
})
