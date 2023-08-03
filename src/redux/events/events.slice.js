import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import { eventsInitState } from './events.initState';

import { fetchEvents } from './events.operations';

const eventsSlice = createSlice({
  name: 'events',
  initialState: eventsInitState,
  reducers: {
    resetEvents: state => {
      state.events = [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchEvents.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchEvents.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.events = payload;
      })
      .addCase(fetchEvents.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { resetEvents } = eventsSlice.actions;

const persistConfig = {
  key: 'events',
  storage,
  whitelist: ['events'],
};
export const eventsReducer = persistReducer(persistConfig, eventsSlice.reducer);
