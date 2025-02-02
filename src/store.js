import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "./features/notes/noteSlice";

const store = configureStore({
  reducer: {
    note: noteReducer,
  },
});

export default store;
