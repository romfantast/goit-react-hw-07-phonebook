import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  filter: '',
};
const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFindFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setFindFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
