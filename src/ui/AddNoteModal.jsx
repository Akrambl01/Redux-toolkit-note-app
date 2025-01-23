import { useEffect, useState } from "react";
import Modal from "./Modal";
import Input from "./Input";
import FormRow from "./FormRow";
import Button from "./Button";
import Form from "./Form";
import DateInput from "./DateInput";
import Textarea from "./Textarea";
import { ColorCircle, ColorContainer } from "./ColorCircle";
import { addNote, updateNote } from "../features/notes/noteSlice";
import { useDispatch, useSelector } from "react-redux";

const colorsObj = [
  { id: 1, color: "#FE9B72" },
  { id: 2, color: "#FEC971" },
  { id: 3, color: "#00D4FE" },
  { id: 4, color: "#B693FD" },
  { id: 5, color: "#E4EE8E" },
];

export default function AddNoteModal() {
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState();
  const [color, setColor] = useState("");
  const dispatch = useDispatch();
  const isEditing = useSelector((state) => state.note.isEditing);

  const notes = useSelector((state) => state.note.notes);

  useEffect(() => {
    if (isEditing) {
      const note = notes.find((note) => note.id == isEditing);
      setTitle(note.title);
      setDescription(note.description);
      setTime(note.time);
      setColor(note.color);
    }
  }, [isEditing, notes]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description || !time) {
      setError(true);
      return;
    }
    isEditing
      ? dispatch(updateNote({ title, description, time, color }))
      : dispatch(addNote({ title, description, time, color, id: Date.now() }));

    setTitle("");
    setDescription("");
    setTime("");
    setColor("");
  };

  return (
    <Modal>
      <h2>Add Note</h2>
      <Form onSubmit={handleSubmit}>
        <FormRow label={"Title"} error={error && !title && "Title is required"}>
          <Input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormRow>

        <FormRow label={"Date"} error={error && !time && "Date is required"}>
          <DateInput
            type="Date"
            id="Date"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </FormRow>

        <FormRow
          label={"Description"}
          error={error && !description && "Description is required"}
        >
          <Textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            maxLength={200}
          />
        </FormRow>

        <ColorContainer>
          <label htmlFor="color">Colors</label>
          <div>
            {colorsObj.map((colorItem) => (
              <ColorCircle
                key={colorItem.id}
                type={colorItem.color}
                onClick={() => setColor(colorItem.color)}
                isActive={color === colorItem.color}
              />
            ))}
          </div>
        </ColorContainer>

        <Button size="large">Save</Button>
      </Form>
    </Modal>
  );
}
