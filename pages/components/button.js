import { useSession, signIn, signOut } from 'next-auth/react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  transition-duration: 0.4s;

  &:hover {
    background-color: #45a049;
  }
`;

const Text = styled.p`
  color: #f2f2f2;
  font-size: 18px;
`;

export default function Component() {
  const { data: session } = useSession();
  
  if (session) {
    return (
      <>
        <Text>Signed in as {session.user.email}</Text>
        <Button onClick={() => signOut()}>Sign out</Button>
      </>
    );
  }
  return (
    <>
      <Text>Not signed in</Text>
      <Button onClick={() => signIn()}>Sign in</Button>
    </>
  );
}

