/* eslint-disable no-alert */
/* eslint-disable no-useless-return */
import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import GoogleIconImage from '../../assets/images/google-icon.svg';
import illustrationImg from '../../assets/images/illustration.svg';
import { Button } from '../../components/Button';
import { LogoSvg } from '../../components/LogoSvg';
import { useAuth } from '../../hooks/useAuth';
import { useTheme } from '../../hooks/useTheme';
import { database } from '../../services/firebase';
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
  const { theme } = useTheme();

  const [roomCode, setRoomCode] = useState<string>('');

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }
    history.push('/rooms/new');
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === '') {
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      alert('Room does not exists.');
      return;
    }

    if (roomRef.val().endedAt) {
      alert('Room already closed');
      return;
    }

    history.push(`rooms/${roomCode}`);
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
          <LogoSvg />
          <GoggleBtn onClick={handleCreateRoom} type="button">
            <img src={GoogleIconImage} alt="Google logo" />
            Create your room with Google
          </GoggleBtn>
          <Divider>Or enter a room</Divider>
          <RoomForm onSubmit={handleJoinRoom} action="">
            <input
              type="text"
              placeholder="Write the room code"
              onChange={(event) => setRoomCode(event.target.value)}
              value={roomCode}
            />
            <Button type="submit">Enter at room </Button>
          </RoomForm>
        </MainContent>
      </Main>
    </Wrapper>
  );
}

export default Home;
