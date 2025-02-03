import styled, { css } from "styled-components";

export const ColorContainer = styled.div`
  display: flex;
  padding-top: 5px;
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
  margin-top: 5px;


  &:hover {
    scale: 1.3;
    transition: all 0.4s;
  }
  
  &:active {
    scale: 0.9;
    transition: all 0.2s;
  }
  
  ${(props) =>
    props.isActive &&
    css`
      width: 27px;
      height: 27px;
      margin-top: 2px;
      border: 1.8px solid var(--color-grey-600);
    `}

  ${(props) =>
    props.type === "#E4EE8E" &&
    css`
      background-color: #E4EE8E;
    `}
  ${(props) =>
    props.type === "#B693FD" &&
    css`
      background-color: #B693FD;
    `}
    ${(props) =>
    props.type === "#00D4FE" &&
    css`
      background-color: #00D4FE;
    `}
    ${(props) =>
    props.type === "#FEC971" &&
    css`
      background-color: #FEC971;
    `}
    ${(props) =>
    props.type === "#FE9B72" &&
    css`
      background-color: #FE9B72;
    `}
`;

ColorCircle.defaultProps = {
  type: "blue",
};
