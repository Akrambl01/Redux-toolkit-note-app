import styled from "styled-components";

const StyledSearchInput = styled.input`
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  border-radius: 20px;
  width: 200px;
  margin-left: 1rem;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export default function SearchInput({ placeholder, onChange }) {
  return (
    <StyledSearchInput 
      type="text"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}