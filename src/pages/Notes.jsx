import AddButton from "../ui/AddButton";
import Row from "../ui/Row";
import GridContainer from "../ui/GirdContainer";
import ButtonIcon, { CompletedButtonIcon } from "../ui/ButtonIcon";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import { MdCheckCircle, MdDelete, MdEdit } from "react-icons/md";
import {
  deleteNote,
  editMode,
  showModel,
  toggleComplete,
} from "../features/notes/noteSlice";
import { useDispatch, useSelector } from "react-redux";
import AddNoteModal from "../features/notes/AddNoteModal";
import { useState } from "react";

// Notes component - Main view for displaying and managing notes
function Notes() {
  // Redux hooks for state management
  const dispatch = useDispatch(); // Dispatch function for Redux actions
  const notes = useSelector((state) => state.note.notes); // Get notes from Redux store
  const [hoveredNoteId, setHoveredNoteId] = useState(null); // Track which note is hovered

  return (
    <Row type="vertical">
      {/* Header Section */}
      <Row type="horizontal">
        <Logo /> {/* Application logo */}
      </Row>

      {/* Action Bar */}
      <Row type="horizontal">
        {/* Button to open add note modal */}
        <AddButton onClick={() => dispatch(showModel())} />
      </Row>

      {/* Main Content Area */}
      <Row>
        <Heading as="h3">Notes</Heading> {/* Section title */}
        {/* Notes Grid Container */}
        <GridContainer>
          {notes.map((note) => (
            // Individual Note Card
            <div
              className="noteItem"
              key={note.id} // Unique key for React list rendering
              style={{
                backgroundColor: note.color, // Note color from state
                position: "relative", // For absolute positioning of child elements
                opacity: note.completed ? 0.6 : 1, // Reduce opacity for completed notes
              }}
              // Hover handlers for showing completion button
              onMouseEnter={() => setHoveredNoteId(note.id)}
              onMouseLeave={() => setHoveredNoteId(null)}
            >
              {/* Completion Checkmark Button (visible on hover) */}
              {hoveredNoteId === note.id && (
                <CompletedButtonIcon
                  onClick={() => dispatch(toggleComplete(note.id))}
                >
                  {/* Green checkmark for completed, gray for incomplete */}
                  <MdCheckCircle color={note.completed ? "green" : "#555"} />
                </CompletedButtonIcon>
              )}

              {/* Note Content */}
              <div
                style={{
                  textDecoration: note.completed ? "line-through" : "none",
                }}
              >
                <h3>{note.title}</h3> {/* Note title */}
                <p>{note.description}</p> {/* Note description */}
              </div>

              {/* Note Footer with Timestamp and Actions */}
              <Row type="horizontal">
                <span className="time">{note.time}</span> {/* Creation time */}
                <span className="actions">
                  {/* Edit Note Button */}
                  <ButtonIcon onClick={() => dispatch(editMode(note.id))}>
                    <MdEdit /> {/* Edit icon */}
                  </ButtonIcon>

                  {/* Delete Note Button */}
                  <ButtonIcon onClick={() => dispatch(deleteNote(note.id))}>
                    <MdDelete /> {/* Delete icon */}
                  </ButtonIcon>
                </span>
              </Row>
            </div>
          ))}
        </GridContainer>
        {/* Add/Edit Note Modal (conditionally rendered elsewhere) */}
        <AddNoteModal />
      </Row>
    </Row>
  );
}

export default Notes;
