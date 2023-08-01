import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

// import { eventsInitState } from "./events.initState";
// import { fetchevents, updateUser } from "./events.operations";

const eventsSlice = createSlice({
  name: "events",
  initialState: [],
  reducers: {},
});

const persistConfig = {
  key: "events",
  storage,
  whitelist: ["events"],
};
export const eventsReducer = persistReducer(persistConfig, eventsSlice.reducer);
