import { configureStore } from "@reduxjs/toolkit";
import noteSlice from "./features/notes/noteSlice";

const store = configureStore({
  reducer: {
    note: noteSlice,
  },
});

export default store;
