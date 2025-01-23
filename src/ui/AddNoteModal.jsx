import { useState } from "react";
import Modal from "./Modal";
import Input from "./Input";
import FormRow from "./FormRow";
import Button from "./Button";
import Form from "./Form";
import DateInput from "./DateInput";
import Textarea from "./Textarea";
import { ColorCircle, ColorContainer } from "./ColorCircle";

const colors = [
  { id: 1, color: "red" },
  { id: 2, color: "blue" },
  { id: 3, color: "green" },
  { id: 4, color: "purple" },
  { id: 5, color: "pink" },
];

export default function AddNoteModal({ isOpen, onClose, onSave }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState(new Date());
  const [color, setColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ title, description, time, color });
    setTitle("");
    setDescription("");
    setTime("");
    onClose();
    setColor("");
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
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
            {colors.map((color) => (
              <ColorCircle
                key={color.id}
                type={color.color}
                onClick={() => setColor(color.color)}
              />
            ))}
          </div>
        </ColorContainer>

        <Button>Save</Button>
      </Form>
    </Modal>
  );
}
