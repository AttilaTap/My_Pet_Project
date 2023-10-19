import styled from 'styled-components';
import Button from './button';
import UserIcon from './userIcon';

const StyledHeader = styled.header`
  background-color: #000000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Spacer = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  color: #ffffff;
  text-align: center;
`;

const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const FakeActionsContainer = styled.div`
  width: 210px;
`;

export default function Header() {
  return (
    <StyledHeader>
      <FakeActionsContainer />
      <Title>Welcome to my 9GAG</Title>
      <ActionsContainer>
        <UserIcon />
        <Button>Create Post</Button>
      </ActionsContainer>
    </StyledHeader>
  );
}
