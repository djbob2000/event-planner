import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

axios.defaults.baseURL = 'https://64cb4089700d50e3c7059815.mockapi.io/';

export const fetchEvents = createAsyncThunk(
  'events/fetchEvents',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/events', {
        params: {
          page: 1,
          limit: 8,
        },
      });
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addEvent = createAsyncThunk(
  'events/add',
  async (event, thunkAPI) => {
    try {
      const { data } = await axios.post(`/events/`, event);

      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteEvent = createAsyncThunk(
  'events/deleteEvent',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/events/${id}`);
      if (response.status === 200) {
        return id;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editEvent = createAsyncThunk(
  'events/editEvent',
  async (editedEvent, thunkAPI) => {
    try {
      const { data } = await axios.put(
        `/events/${editedEvent.id}`,
        editedEvent
      );

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
