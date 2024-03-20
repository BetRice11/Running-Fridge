import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null, // Initialize user as null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload; // Set user data in the store
    },
    clearUser(state) {
      state.user = null; // Clear user data when the user logs out
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
