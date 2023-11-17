// redux/eventsSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const eventsSlice = createSlice({
  name: "events",
  initialState: {
    list: [],
    isFormOpen: false,
  },
  reducers: {
    addEvent: (state, action) => {
      state.list.push(action.payload);
      state.isFormOpen = true;
    },
    openForm: (state) => {
      state.isFormOpen = true;
    },
    closeForm: (state) => {
      state.isFormOpen = false;
    },
  },
});

export const { addEvent, openForm, closeForm } = eventsSlice.actions;

export default eventsSlice.reducer;
