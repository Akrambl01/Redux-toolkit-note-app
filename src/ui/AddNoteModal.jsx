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
  { id: 1, color: "#db5050" },
  { id: 2, color: "blue" },
  { id: 3, color: "green" },
  { id: 4, color: "purple" },
  { id: 5, color: "pink" },
];

export default function AddNoteModal() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState(new Date());
  const [color, setColor] = useState("");
  const dispatch = useDispatch();
  const isEditing = useSelector((state) => state.note.isEditing);
  console.log(isEditing);

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
        <FormRow label={"Title"} error={title ? null : "Title is required"}>
          <Input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </FormRow>

        <FormRow label={"Date"} error={title ? null : "Date is required"}>
          <DateInput
            type="Date"
            id="Date"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </FormRow>

        <FormRow
          label={"Description"}
          error={description ? null : "Description is required"}
        >
          <Textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            maxLength={200}
            required
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
