import styled from "styled-components";
import { FaPlus } from "react-icons/fa";

const Button = styled.button`
  background: #000000;
  color: white;
  border: none;
  border-radius: 50%;
  width: 55px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background: #363636;
    // animation
    transform: scale(1.1);
    transition: all 0.6s ease;
  }
`;

export default function AddButton({ onClick }) {
  return (
    <Button onClick={onClick}>
      <FaPlus size={20} />
    </Button>
  );
}
