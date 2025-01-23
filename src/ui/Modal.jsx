import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { hideModel } from "../features/notes/noteSlice";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(4px);
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: relative;
  background: white;
  border-radius: 10px;
  padding: 2rem;
  /* width: fit-content; */
  max-width: fit-content;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 3.5rem;
  margin: 0px 2px 19px 2px;
  cursor: pointer;
  color: #333;

  &:hover {
    color: red;
  }
`;

export default function Modal({ children }) {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.note.isModalOpen);

  if (!isModalOpen) return null;

  return (
    <ModalWrapper>
      <ModalContent>
        <CloseButton onClick={() => dispatch(hideModel())}>&times;</CloseButton>
        {children}
      </ModalContent>
    </ModalWrapper>
  );
}
