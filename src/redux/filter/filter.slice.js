import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',

  reducers: {
    setFilterQuery: (state, { payload }) => {
      return (state = payload);
    },
  },
});

export const { setFilterQuery } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
