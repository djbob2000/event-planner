import { createSelector } from '@reduxjs/toolkit';
export const selectEvents = state => state.events.events;
export const selectFilter = state => state.filter;

export const selectEventsById = id =>
  createSelector(selectEvents, events => {
    const filtered = events.filter(item => item.id === id.toString());
    return filtered;
  });

export const selectFilteredEvents = createSelector(
  [selectEvents, selectFilter],
  (events, filter) => {
    return events.filter(event =>
      event.title.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
