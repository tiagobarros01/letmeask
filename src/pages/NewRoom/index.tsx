/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import illustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';
import { Button } from '../../components/Button/index';
import {
  Wrapper,
  Container,
  Main,
  MainContent,
  CreateRoomForm,
} from './style';

function NewRoom(): JSX.Element {
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
          <h2>Create a new room</h2>
          <CreateRoomForm action="">
            <input type="text" placeholder="Room name" />
            <Button type="submit">Create room </Button>
          </CreateRoomForm>
          <p>
            Want to enter an existing room?
            {' '}
            <a href="#">Click here</a>
          </p>
        </MainContent>
      </Main>
    </Wrapper>
  );
}

export default NewRoom;
