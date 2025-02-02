import { useState, useEffect } from "react";
import Modal from "../../ui/Modal";
import Input from "../../ui/Input";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import DateInput from "../../ui/DateInput";
import Textarea from "../../ui/Textarea";
import { ColorCircle, ColorContainer } from "../../ui/ColorCircle";
import { addNote, updateNote, hideModel } from "./noteSlice";
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
  const [time, setTime] = useState(new Date().toISOString().split("T")[0]);
  const [color, setColor] = useState("");
  const dispatch = useDispatch();
  const { isEditing, notes, isModalOpen } = useSelector((state) => state.note);

  // Reset form when modal is closed or when switching between notes
  useEffect(() => {
    if (isModalOpen && isEditing) {
      const noteToEdit = notes.find((note) => note.id === isEditing);
      if (noteToEdit) {
        setTitle(noteToEdit.title);
        setDescription(noteToEdit.description);
        setTime(noteToEdit.time);
        setColor(noteToEdit.color || "");
      }
    } else if (!isModalOpen) {
      resetForm();
    }
  }, [isModalOpen, isEditing, notes]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description || !time) {
      setError(true);
      return;
    }

    if (isEditing) {
      dispatch(updateNote({ title, description, time, color }));
    } else {
      dispatch(addNote({ title, description, time, color, id: Date.now() }));
    }

    resetForm();
    dispatch(hideModel());
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setTime(new Date().toISOString().split("T")[0]);
    setColor("");
    setError("");
  };

  return (
    <Modal>
      <h2>{isEditing ? "Edit Note" : "Add Note"}</h2>
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