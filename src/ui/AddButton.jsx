import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';

const Button = styled.button`
  background: #007bff;
  color: white;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background: #0056b3;
  }
`;

export default function AddButton({ onClick }) {
  return (
    <Button onClick={onClick}>
      <FaPlus size={20} />
    </Button>
  );
}
