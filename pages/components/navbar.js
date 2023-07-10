import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  width: 20%;
  background-color: #eee;
  padding: 20px;
  overflow: auto;
`;

const Styledh1 = styled.h1`
  color: #333;
`;

export default function Navbar() {
  return (
    <StyledNav>
      <Styledh1>
        <li>Home</li>
        </Styledh1>
    </StyledNav>
  );
}

