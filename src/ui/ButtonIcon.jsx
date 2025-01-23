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
