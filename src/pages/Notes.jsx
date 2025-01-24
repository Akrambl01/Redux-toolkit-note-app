import AddButton from "../ui/AddButton";
import Row from "../ui/Row";
import GridContainer from "../ui/GirdContainer";
import ButtonIcon from "../ui/ButtonIcon";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import { MdDelete, MdEdit } from "react-icons/md";
import { deleteNote, editMode, showModel } from "../features/notes/noteSlice";
import { useDispatch, useSelector } from "react-redux";
import AddNoteModal from "../features/notes/AddNoteModal";

function Notes() {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.note.notes);

  return (
    <Row type="vertical">
      <Row type="horizontal">
        <Logo />
      </Row>
      <Row type="horizontal">
        <AddButton onClick={() => dispatch(showModel())} />
      </Row>
      <Row>
        <Heading as="h3">Notes</Heading>
        {/* main content */}
        <GridContainer>
          {notes.map((note) => (
            <div
              className="noteItem"
              key={note.id}
              style={{ backgroundColor: note.color }}
            >
              <div>
                <h3>{note.title}</h3>
                <p>{note.description}</p>
              </div>
              <Row type="horizontal">
                <span className="time">{note.time}</span>
                <span className="actions">
                  <ButtonIcon onClick={() => dispatch(editMode(note.id))}>
                    <MdEdit />
                  </ButtonIcon>
                  <ButtonIcon onClick={() => dispatch(deleteNote(note.id))}>
                    <MdDelete />
                  </ButtonIcon>
                </span>
              </Row>
            </div>
          ))}
        </GridContainer>
        <AddNoteModal />
      </Row>
    </Row>
  );
}

export default Notes;
