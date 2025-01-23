import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

// const variations = {
//   primary: css`
//     color: var(--color-brand-50);
//     background-color: var(--color-grey-900);

//     &:hover {
//       background-color: var(--color-grey-800);
//     }
//   `,
//   secondary: css`
//     color: var(--color-grey-600);
//     background: var(--color-grey-0);
//     border: 1px solid var(--color-grey-200);

//     &:hover {
//       background-color: var(--color-grey-50);
//     }
//   `,
//   danger: css`
//     color: var(--color-red-100);
//     background-color: var(--color-red-700);

//     &:hover {
//       background-color: var(--color-red-800);
//     }
//   `,
// };

const Button = styled.button`
  color: var(--color-brand-50);
  background-color: var(--color-grey-900);
  border: none;
  margin-top: 2.5rem;
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-md);
  ${(props) => sizes[props.size]}

  &:hover {
    background-color: var(--color-grey-800);
    scale: 1.02;
    transition: all 0.5s ease;
  }

  &:active {
    scale: 0.93;
    transition: all 0.2s;
  }
`;

Button.defaultProps = {
  size: "medium",
  // variation: "primary",
};

export default Button;
