import { createSlice } from "@reduxjs/toolkit";
const initialNotes = [
  {
    id: 1,
    title: "My first note",
    description: "This is my first note",
    time: "2024-02-02",
    completed: true,
    color: "#FE9B72",
  },
  {
    id: 2,
    title: "My second note",
    description: "This is my second note",
    time: "2024-04-02",
    completed: false,
    color: "#E4EE8E",
  },
  {
    id: 3,
    title: "My third note",
    description: "This is my third note",
    time: "2024-05-02",
    completed: false,
    color: "#00D4FE",
  },
  {
    id: 4,
    title: "My first note",
    description: "This is my first note",
    time: "2024-02-02",
    completed: true,
    color: "#FEC971",
  },
  {
    id: 5,
    title: "My second note",
    description: "This is my second note",
    time: "2024-04-02",
    completed: false,
  },
  {
    id: 6,
    title: "My second note",
    description: "This is my second note",
    time: "2024-04-02",
    completed: false,
    color: "#B693FD",
  },
];

const initialState = {
  notes: initialNotes,
  isModalOpen: false,
  isEditing: false,
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
      const { title, description, time, color } = action.payload;
      const note = state.notes.find((note) => note.id === state.isEditing);
      note.title = title;
      note.description = description;
      note.time = time;
      note.color = color;
      state.isModalOpen = false;
      state.isEditing = "";
    },

    showModel: (state) => {
      state.isModalOpen = true;
    },

    hideModel: (state) => {
      state.isModalOpen = false;
    },

    editMode: (state, action) => {
      state.isEditing = action.payload;
      state.isModalOpen = true;
    },
    toggleComplete: (state, action) => {
      const note = state.notes.find((note) => note.id === action.payload);
      if (note) {
        note.completed = !note.completed;
      }
    },
  },
});

export const {
  addNote,
  deleteNote,
  updateNote,
  showModel,
  hideModel,
  editMode,
  toggleComplete,
} = noteSlice.actions;
export default noteSlice.reducer;

// export const getNotes = (state) => state.notes;
