import styled, { css } from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 2rem;

  & div {
    padding: 1rem;
    box-shadow: var(--shadow-sm);
    border-radius: var(--border-radius-sm);
    border: 1px solid var(--color-grey-100);
    max-height: 40rem;
  }
`;

// GridContainer.defaultProps = {
//   type: "pink",
// };

export default GridContainer;
