import styled, { css } from "styled-components";

export const ColorContainer = styled.div`
  display: flex;
  padding-top: 10px;
  gap: 1rem;
  align-items: center;
  & div {
    padding: 5px;
    width: 74%;
    justify-content: center;
    display: flex;
    gap: 2rem;
  }
`;

export const ColorCircle = styled.span`
  width: 21px;
  height: 21px;
  border-radius: 50%;
  cursor: pointer;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  // animation

  &:hover {
    scale: 1.2;
    transition: all 0.2s;
  }

    &:active {
    scale: 1;
    transition: all 0.2s;
    }

  ${(props) =>
    props.type === "pink" &&
    css`
      background-color: var(--color-pink-700);
    `}
  ${(props) =>
    props.type === "blue" &&
    css`
      background-color: var(--color-blue-700);
    `}
    ${(props) =>
    props.type === "green" &&
    css`
      background-color: var(--color-green-700);
    `}
    ${(props) =>
    props.type === "purple" &&
    css`
      background-color: var(--color-purple-700);
    `}
    ${(props) =>
    props.type === "red" &&
    css`
      background-color: var(--color-red-700);
    `}
`;

ColorCircle.defaultProps = {
  type: "blue",
};
