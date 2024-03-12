import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: '',
}

export const querySlice = createSlice({
    name: 'query',
    initialState,
    reducers: {
        reset: {
            reset: (state) => {
                state.value = ''
            },
            serQuery: (state, action) => {
                state.value = action.payload
            }
        }
    }
})
export const { reset, setQuery } = querySlice.actions;

export default querySlice.reducer;
