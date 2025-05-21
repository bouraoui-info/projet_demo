import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  user: number[];
}

const initialState: UserState = {
  user: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<any>) => {
      state.user.push(action.payload);
    },
    clearUsers: (state) => {
      state.user = [];
    },
  },
});

export const { addUser, clearUsers } = userSlice.actions;

export default userSlice.reducer;
