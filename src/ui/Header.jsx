import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 20px;
  border-bottom: 1px solid var(--color-grey-100);
`;

function Header() {
  return <StyledHeader>StyledHeader</StyledHeader>;
}

export default Header;
