import { createSlice } from "@reduxjs/toolkit";

// Initial notes data for testing
const initialNotes = [
  {
    id: 1,
    title: "My first note",
    description: "This is my first note",
    date: "2024-02-02",
    completed: true,
    color: "#FE9B72",
  },
  {
    id: 2,
    title: "My second note",
    description: "This is my second note",
    date: "2024-04-02",
    completed: false,
    color: "#E4EE8E",
  },
  {
    id: 3,
    title: "My third note",
    description: "This is my third note",
    date: "2024-05-02",
    completed: false,
    color: "#00D4FE",
  },
  {
    id: 4,
    title: "My first note",
    description: "This is my first note",
    date: "2024-02-02",
    completed: true,
    color: "#FEC971",
  },
  {
    id: 5,
    title: "My second note",
    description: "This is my second note",
    date: "2024-04-02",
    completed: false,
  },
];

// Initial Redux state configuration
const initialState = {
  notes: initialNotes, // Array of note objects
  isModalOpen: false, // Controls modal visibility
  isEditing: null, // Tracks if we're editing (contains note ID)
};

// Create Redux slice
const noteSlice = createSlice({
  name: "notes", // Slice name
  initialState,

  reducers: {
    // Add new note to beginning of array(unshift) and close modal
    addNote: (state, action) => {
      state.notes.unshift(action.payload);
      state.isModalOpen = false;
    },

    // Filter note by ID
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },

    // Update existing note using isEditing(ID) from state
    updateNote: (state, action) => {
      const { title, description, date, color } = action.payload;
      // Find note being edited using stored ID
      const note = state.notes.find((note) => note.id === state.isEditing);
      // Update note properties
      note.title = title;
      note.description = description;
      note.date = date;
      note.color = color;
      // Close modal and reset editing state
      state.isModalOpen = false;
      state.isEditing = null;
    },

    // Modal visibility
    showModel: (state) => {
      state.isModalOpen = true;
    },
    hideModel: (state) => {
      state.isModalOpen = false;
      state.isEditing = null;
    },

    // Enable edit mode
    editMode: (state, action) => {
      state.isEditing = action.payload; // Set ID of note
      state.isModalOpen = true; // Open modal
    },

    // Toggle completion status of note
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
