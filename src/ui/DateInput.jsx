import styled from "styled-components";

const DateInput = styled.input`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.5rem 2.3rem;
  box-shadow: var(--shadow-sm);
  font-size: 1.8rem;
  color: var(--color-grey-700);
  outline: none;
  width: 100%;

  &:focus {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px var(--color-primary-light);
  }

  &::-webkit-calendar-picker-indicator {
    cursor: pointer;
    color: var(--color-primary);
  }
`;

export default DateInput;
