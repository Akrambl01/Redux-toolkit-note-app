import styled from "styled-components";

const StyledLogo = styled.div`
  display: flex;
  gap: 0.8rem;
  width: 100%;
  text-align: center;
`;

const Img = styled.img`
  width: 38px;
`;
const TextLogo = styled.p`
  font-size: 2rem;
  padding: 0.8rem;
  font-weight: 600;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src="/redux.svg" alt="Logo" />
      <TextLogo>RTK Simple Notes</TextLogo>
    </StyledLogo>
  );
}

export default Logo;
