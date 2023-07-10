import styled from 'styled-components';

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #000000;
  padding: 5px;
`;

const Styledh1 = styled.h1`
  color: #ffffff;
  margin: 0;
  font-size: 1rem;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <Styledh1>
        <div>by Attila</div>
      </Styledh1>
    </StyledFooter>
  );
}
