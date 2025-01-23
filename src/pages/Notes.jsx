import { useState } from "react";
import AddButton from "../ui/AddButton";
import Row from "../ui/Row";
import SearchBar from "../ui/SearchBar ";
import AddNoteModal from "../ui/AddNoteModal";
import GridContainer from "../ui/GirdContainer";

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

function Notes() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [notes, setNotes] = useState(initialNotes);

  const handleAddNote = (note) => {
    setNotes((prevNotes) => [...prevNotes, { ...note, id: Date.now() }]);
  };

  return (
    <Row type="vertical">
      <Row type="horizontal">
        <h1>My Notes</h1>
      </Row>
      <Row type="horizontal">
        <AddButton onClick={() => setModalOpen(true)} />
        <SearchBar />
      </Row>
      <Row>
        <h1>Notes</h1>
        {/* Your main content */}
        <GridContainer>
          {notes.map((note) => (
            <div key={note.id} style={{ backgroundColor: note.color }}>
              <h3>{note.title}</h3>
              <p>{note.description}</p>
              <span>{note.time}</span>
            </div>
          ))}
        </GridContainer>
        <AddNoteModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          onSave={handleAddNote}
        />
      </Row>
    </Row>
  );
}

export default Notes;
