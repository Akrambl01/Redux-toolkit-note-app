// src/components/SearchBar.jsx
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 8px;
  padding: 5px 10px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  max-width: 38rem;
  min-width: 27rem;
  & span {
    color: var(--color-grey-500);
    padding: 5px 0px 0px 2px;
  }
`;

const Input = styled.input`
  border: none;
  outline: none;
  margin-left: 10px;
  font-size: 16px;
  width: 100%;
  padding: 10px;
`;

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const handleChange = (value) => {
    setSearch(value);
  };
  return (
    <SearchContainer>
      <span>
        <FaSearch size={23} />
      </span>
      <Input
        type="text"
        placeholder="Search notes..."
        value={search}
        onChange={(e) => handleChange(e.target.value)}
      />
    </SearchContainer>
  );
};

export default SearchBar;
