import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: ''
}

export const querySlice = createSlice({
    name: 'query',
    initialState,
    reducers: {
        reset: (state) => {
            state.value = ""
        },
        query: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { reset, query} = querySlice.actions

export default querySlice.reducer
