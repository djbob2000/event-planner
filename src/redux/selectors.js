import { createSelector } from '@reduxjs/toolkit';
export const selectEvents = state => state.events.events;
export const selectTextFilter = state => state.filter.filterQuery;
export const selectCategoryFilter = state => state.filter.categoryFilter;
export const selectSortFilter = state => state.filter.sortFilter;

export const selectEventsById = id =>
  createSelector(selectEvents, events => {
    const filtered = events.filter(item => item.id === id.toString());
    return filtered;
  });

export const selectFilteredAndSortedEvents = createSelector(
  [selectEvents, selectTextFilter, selectCategoryFilter, selectSortFilter],
  (events, textFilter, categoryFilter, sortFilter) => {
    const filteredByTitleEvents = events.filter(
      event =>
        event.title.toLowerCase().includes(textFilter.toLowerCase()) ||
        event.description.toLowerCase().includes(textFilter.toLowerCase())
    );

    const filteredEvents = filteredByTitleEvents.filter(event => {
      if (categoryFilter === '') {
        return true;
      }
      return event.category === categoryFilter;
    });

    switch (sortFilter) {
      case 'name_asc':
        filteredEvents.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'name_desc':
        filteredEvents.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case 'date_asc':
        filteredEvents.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case 'date_desc':
        filteredEvents.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case 'priority_asc':
        filteredEvents.sort((a, b) => a.priority - b.priority);
        break;
      case 'priority_desc':
        filteredEvents.sort((a, b) => b.priority - a.priority);
        break;
      default:
        break;
    }

    return filteredEvents;
  }
);
