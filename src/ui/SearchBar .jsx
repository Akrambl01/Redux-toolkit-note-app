import styled from 'styled-components';

const SearchBar = styled.div`
  display: flex;
  margin: 1rem auto;
  max-width: 600px;
  padding: 0.5rem;
  border-radius: 8px;
  background-color: #f4f4f4;

  input {
    flex: 1;
    border: none;
    outline: none;
    padding: 0.5rem;
    font-size: 1rem;
  }
`;

export default function Search() {
  return (
    <SearchBar>
      <input type="text" placeholder="Search notes..." />
    </SearchBar>
  );
}