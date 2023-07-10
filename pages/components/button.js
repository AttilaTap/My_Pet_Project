import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  padding: 0.5em 1em;
  margin: 1em;
  margin-right: 50px;
  color: #fff;
  background-color: #333;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #777;
  }
`;

export default function Button({ children, onClick }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}
