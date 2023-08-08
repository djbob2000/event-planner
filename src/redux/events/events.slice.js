import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import { eventsInitState } from './events.initState';

import {
  fetchEvents,
  deleteEvent,
  addEvent,
  editEvent,
} from './events.operations';

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
      })

      .addCase(deleteEvent.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteEvent.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.currentEvent = null;
        state.events = state.events.filter(({ id }) => id !== payload);
      })
      .addCase(deleteEvent.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(addEvent.pending, state => {
        state.isLoading = true;
      })
      .addCase(addEvent.fulfilled, (state, { payload }) => {
        state.events.push(payload);
        state.error = null;
        state.isLoading = false;
      })
      .addCase(addEvent.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(editEvent.pending, state => {
        state.isLoading = true;
      })
      .addCase(editEvent.fulfilled, (state, { payload }) => {
        console.log(
          '🚀 ~ file: events.slice.js:74 ~ .addCase ~ payload:',
          payload
        );
        state.events = state.events.map(event =>
          event.id === payload.id ? payload : event
        );
        state.error = null;
        state.isLoading = false;
      })
      .addCase(editEvent.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
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
