import styled from "styled-components";

const NoteContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(23rem, 1fr));
  gap: 2rem;

  & div.noteItem {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 5.2rem;
    background-color: var(--color-blue-100);
    color: var(--color-grey-900);
    padding: 2rem;
    border-radius: var(--border-radius-lg);
    border: 1px solid var(--color-grey-100);
    max-height: 40rem;
    box-shadow: var(--shadow-sm);
    position: relative;

    & h3 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    & p {
      font-size: 1.6rem;
      margin-bottom: 1rem;
      color: var(--color-grey-800);
    }
  }

  & .date{
    color: var(--color-grey-800);
    font-size: 1.4rem;
  }

  & .actions{
    display: flex;
    justify-content: space-between;
    gap: 1.7rem;
  }


`;

export default NoteContainer;
