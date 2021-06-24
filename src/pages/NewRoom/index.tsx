import React, { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import illustrationImg from '../../assets/images/illustration.svg';
import { Button } from '../../components/Button';
import { LogoSvg } from '../../components/LogoSvg';
import { useAuth } from '../../hooks/useAuth';
import { database } from '../../services/firebase';
import {
  Wrapper, Container, Main, MainContent, CreateRoomForm,
} from './style';

function NewRoom(): JSX.Element {
  const { user } = useAuth();
  const history = useHistory();

  const [newRoom, setNewRoom] = useState('');

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

    if (newRoom.trim() === '') {
      return;
    }

    const roomRef = database.ref('rooms');

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    });

    history.push(`/rooms/${firebaseRoom.key}`);
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
          <h2>Create a new room</h2>
          <CreateRoomForm onSubmit={handleCreateRoom} action="">
            <input
              type="text"
              placeholder="Room name"
              onChange={(event) => setNewRoom(event.target.value)}
              value={newRoom}
            />
            <Button type="submit">Create room </Button>
          </CreateRoomForm>
          <p>
            Want to enter an existing room?
            {' '}
            <Link to="/">Click here</Link>
          </p>
        </MainContent>
      </Main>
    </Wrapper>
  );
}

export default NewRoom;
