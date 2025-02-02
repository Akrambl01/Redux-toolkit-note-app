import styled from "styled-components";

const Button = styled.button`
  background: var(--color-grey-800);
  width: 3.4rem;
  height: 3.4rem;
  border: none;
  padding: 0.3rem;
  border-radius: 50%;
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-700);
  }

  & svg {
    width: 2rem;
    height: 2rem;
    color: var(--color-brand-50);
  }
`;

export default function ButtonIcon({ onClick, children }) {
  return <Button onClick={onClick}>{children}</Button>;
}

const CompletedButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.8);
  width: 3.4rem;
  height: 3.4rem;
  border: none;
  padding: 0.3rem;
  border-radius: 50%;
  transition: all 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 1);
    transform: scale(1.1);
  }

  & svg {
    width: 2rem;
    height: 2rem;
    color: var(--color-brand-50);
  }
`;

export function CompletedButtonIcon({ onClick, children }) {
  return <CompletedButton onClick={onClick}>{children}</CompletedButton>;
}
