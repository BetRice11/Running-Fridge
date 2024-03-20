import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
}

export const itemSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        deleteItem(state, action) {
            const itemId = action.payload
            state.items = state.items.filter(item => item.id !== itemId)
        }
    }
})

export const { deleteItem } = itemSlice.actions
export default itemSlice.reducer
