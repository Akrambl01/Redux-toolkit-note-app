import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  // flexible grid layout with wrapping columns 4 for default 
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 2rem;
  padding: 2rem;

  & div {
    padding: 1rem;
    box-shadow: var(--shadow-sm);
    border-radius: var(--border-radius-sm);
    border: 1px solid var(--color-grey-100);
    max-height: 40rem;
    background-color: var(--color-blue-100);
  }
`;

export default GridContainer;
