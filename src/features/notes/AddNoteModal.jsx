import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// UI components
import Modal from "../../ui/Modal";
import Input from "../../ui/Input";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import DateInput from "../../ui/DateInput";
import Textarea from "../../ui/Textarea";
import { ColorCircle, ColorContainer } from "../../ui/ColorCircle";
// Redux actions 
import { addNote, updateNote } from "./noteSlice";

// Color options for note customization
const colorOptions = [
  { id: 1, color: "#FE9B72" },
  { id: 2, color: "#FEC971" },
  { id: 3, color: "#00D4FE" },
  { id: 4, color: "#B693FD" },
  { id: 5, color: "#E4EE8E" },
];

export default function AddNoteModal() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]); // Default to current date
  const [color, setColor] = useState(""); 
  const [error, setError] = useState("");
  
  const dispatch = useDispatch();
  const { isEditing, notes, isModalOpen } = useSelector((state) => state.note);

  // Effect for handling form state when editing or modal visibility changes
  useEffect(() => {
    if (isModalOpen && isEditing) {
      // Populate form with existing note data when editing
      const noteToEdit = notes.find((note) => note.id === isEditing);
      if (noteToEdit) {
        setTitle(noteToEdit.title);
        setDescription(noteToEdit.description);
        setDate(noteToEdit.date);
        setColor(noteToEdit.color || "");
      }
    } else if (!isModalOpen) {
      // Reset form when modal closes
      resetForm();
    }
  }, [isModalOpen, isEditing, notes]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!title || !description || !date) {
      setError(true);
      return;
    }

    // Dispatch action based on edit mode
    if (isEditing) {
      dispatch(updateNote({ title, description, date, color }));
    } else {
      dispatch(addNote({ title, description, date, color, id: Date.now() }));
    }

    resetForm();
  };

  // Reset all form fields to initial state
  const resetForm = () => {
    setTitle("");
    setDescription("");
    setDate(new Date().toISOString().split("T")[0]);
    setColor("");
    setError("");
  };

  return (
    <Modal>
      <h2>{isEditing ? "Edit Note" : "Add Note"}</h2>
      <Form onSubmit={handleSubmit}>
        {/* Title Input */}
        <FormRow label={"Title"} error={error && !title && "Title is required"}>
          <Input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </FormRow>

        {/* Date Input */}
        <FormRow label={"Date"} error={error && !date && "Date is required"}>
          <DateInput
            type="Date"
            id="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </FormRow>

        {/* Description Textarea */}
        <FormRow
          label={"Description"}
          error={error && !description && "Description is required"}
        >
          <Textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            maxLength={200}
            required
          />
        </FormRow>

        {/* Color Selection */}
        <ColorContainer>
          <label htmlFor="color">Colors</label>
          <div>
            {colorOptions.map((colorItem) => (
              <ColorCircle
                key={colorItem.id}
                type={colorItem.color}
                onClick={() => setColor(colorItem.color)}
                isActive={color === colorItem.color}
              />
            ))}
          </div>
        </ColorContainer>

        {/* Submit Button */}
        <Button size="large">Save</Button>
      </Form>
    </Modal>
  );
}