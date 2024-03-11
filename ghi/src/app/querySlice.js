// querySlice.js

import { createSlice } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
  query: '',
};

// Define the query slice
const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const { setQuery } = querySlice.actions;

export default querySlice.reducer;
