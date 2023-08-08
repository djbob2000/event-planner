import { createSlice } from '@reduxjs/toolkit';
import { filterInitState } from './filter.initState';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitState,

  reducers: {
    setFilterQuery: (state, { payload }) => {
      state.filterQuery = payload;
    },
    setCategoryFilter: (state, { payload }) => {
      state.categoryFilter = payload;
    },
    setSortFilter: (state, { payload }) => {
      state.sortFilter = payload;
    },
  },
});

export const { setFilterQuery, setCategoryFilter, setSortFilter } =
  filterSlice.actions;

export const filterReducer = filterSlice.reducer;
