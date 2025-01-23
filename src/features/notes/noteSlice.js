import { createSlice } from "@reduxjs/toolkit";
const initialNotes = [
  {
    id: 1,
    title: "My first note",
    description: "This is my first note",
    time: "12:00",
    color: "#db5050",
  },
  {
    id: 2,
    title: "My second note",
    description: "This is my second note",
    time: "12:00",
  },
  {
    id: 3,
    title: "My third note",
    description: "This is my third note",
    time: "12:00",
    color: "pink",
  },
  {
    id: 4,
    title: "My first note",
    description: "This is my first note",
    time: "12:00",
    color: "#db5050",
  },
  {
    id: 55,
    title: "My second note",
    description: "This is my second note",
    time: "12:00",
  },
  {
    id: 57,
    title: "My third note",
    description: "This is my third note",
    time: "12:00",
    color: "pink",
  },
  {
    id: 24,
    title: "My first note",
    description: "This is my first note",
    time: "12:00",
    color: "#db5050",
  },
  {
    id: 86,
    title: "My second note",
    description: "This is my second note",
    time: "12:00",
  },
  {
    id: 23,
    title: "My third note",
    description: "This is my third note",
    time: "12:00",
    color: "pink",
  },
];

const initialState = {
  notes: initialNotes,
  isModalOpen: false,
};

const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.notes.unshift(action.payload);
      state.isModalOpen = false;
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
    updateNote: (state, action) => {
      const { id, title, description, time, color } = action.payload;
      const note = state.notes.find((note) => note.id === id);
      note.title = title;
      note.description = description;
      note.time = time;
      note.color = color;
    },
    showModel: (state) => {
      state.isModalOpen = true;
    },

    hideModel: (state) => {
      state.isModalOpen = false;
    },
  },
});

export const { addNote, deleteNote, updateNote, showModel, hideModel } =
  noteSlice.actions;
export default noteSlice.reducer;

export const getNotes = (state) => state.notes;
