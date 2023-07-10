import styled from 'styled-components';

const StyledFeed = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

const Styledh1 = styled.h1`
  color: #333;
`;

export default function Feed() {
  return (
    <StyledFeed>
      <Styledh1>This is the feed</Styledh1>
    </StyledFeed>
  );
}


