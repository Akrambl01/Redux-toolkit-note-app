import styled from "styled-components";

const StyledLogo = styled.div`
  display: flex;
  gap: 0.8rem;
  width: 100%;
  text-align: center;
  padding: 1.6rem;
`;

const Img = styled.img`
  /* height: 9.6rem; */
  width: 30px;
`;
const TextLogo = styled.p`
  font-size: 1.5rem;
  padding: 0.8rem;
  font-weight: 600;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src="/redux.svg" alt="Logo" />
      <TextLogo>RTK Simple To Do List</TextLogo>
    </StyledLogo>
  );
}

export default Logo;
