
import styled from 'styled-components';

const StyledBanner = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(20% + 40px);
  height: 100vh;
  background-image: url('/assets/portrait-funny-white-british-cat.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export default function Banner() {
  return <StyledBanner />;
}

