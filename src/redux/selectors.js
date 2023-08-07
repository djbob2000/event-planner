import { createSelector } from '@reduxjs/toolkit';
export const selectEvents = state => state.events.events;

export const selectEventsById = id =>
  createSelector(selectEvents, events => {
    const filtered = events.filter(item => item.id === id.toString());
    return filtered;
  });
