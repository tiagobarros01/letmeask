import React from 'react';
import { useHistory } from 'react-router-dom';

import GoogleIconImage from '../../assets/images/google-icon.svg';
import illustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';
import { Button } from '../../components/Button/index';
import { useAuth } from '../../hooks/useAuth';
import {
  Wrapper,
  Container,
  Main,
  MainContent,
  GoggleBtn,
  RoomForm,
  Divider,
} from './style';

function Home(): JSX.Element {
  const history = useHistory();
  const { signInWithGoogle, user } = useAuth();

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }
    history.push('/rooms/new');
  }

  return (
    <Wrapper>
      <Container>
        <img
          src={illustrationImg}
          alt="Illustration symbolizing questions and answers"
        />
        <strong>Create live Q&amp;A rooms</strong>
        <p>Remove your audience&apos;s doubts in real time</p>
      </Container>
      <Main>
        <MainContent>
          <img src={logoImg} alt="Letmeask" />
          <GoggleBtn onClick={handleCreateRoom} type="button">
            <img src={GoogleIconImage} alt="Google logo" />
            Create your room with Google
          </GoggleBtn>
          <Divider>Or enter a room</Divider>
          <RoomForm action="">
            <input type="text" placeholder="Write the room code" />
            <Button type="submit">Enter at room </Button>
          </RoomForm>
        </MainContent>
      </Main>
    </Wrapper>
  );
}

export default Home;
