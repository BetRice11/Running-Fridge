import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: '',
}

export const querySlice = createSlice({
    name: 'query',
    initialState,
    reducers: {
        reset: (state) => {
            state.value = ""
        },
        setQuery: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { reset, setQuery} = querySlice.actions

export default querySlice.reducer
