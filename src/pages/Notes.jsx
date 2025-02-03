import AddButton from "../ui/AddButton";
import Row from "../ui/Row";
import NoteContainer from "../ui/NoteContainer";
import ButtonIcon, { CompletedButtonIcon } from "../ui/ButtonIcon";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import AddNoteModal from "../features/notes/AddNoteModal";
import { MdCheckCircle, MdDelete, MdEdit } from "react-icons/md";
import {
  deleteNote,
  editMode,
  showModel,
  toggleComplete,
} from "../features/notes/noteSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

function Notes() {
  const dispatch = useDispatch(); 
  const notes = useSelector((state) => state.note.notes); // Get notes from Redux store
  const [hoveredNoteId, setHoveredNoteId] = useState(null); // Track which note is hovered

  return (
    <Row type="vertical">
      <Row type="horizontal">
        <Logo />
      </Row>
      <Row type="horizontal">
        {/* Button to open add note modal */}
        <AddButton onClick={() => dispatch(showModel())} />
      </Row>
      {/* Main Content Area */}
      <Row>
        <Heading as="h3">Notes</Heading>
        {/* Notes Grid Container */}
        <NoteContainer>
          {notes.map((note) => (
            // Note Card
            <div
              className="noteItem"
              key={note.id}
              style={{
                backgroundColor: note.color, // Note color from state 
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
                  <MdCheckCircle color={note.completed ? "green" : "#555"} />
                </CompletedButtonIcon>
              )}

              {/* Note Content */}
              <div
                style={{
                  textDecoration: note.completed ? "line-through" : "none",
                }}
              >
                <h3>{note.title}</h3>
                <p>{note.description}</p>
              </div>

              {/* Note Footer with date and Actions */}
              <Row type="horizontal">
                <span className="date">{note.date}</span>
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
        </NoteContainer>
        {/* Add/Edit Note Modal (conditionally rendered ) */}
        <AddNoteModal />
      </Row>
    </Row>
  );
}

export default Notes;
