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
          limit: 6,
        },
      });
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
