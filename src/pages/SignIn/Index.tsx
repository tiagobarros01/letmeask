import React from 'react';

import GoogleIconImage from '../../../public/assets/images/google-icon.svg';
import illustrationImg from '../../../public/assets/images/illustration.svg';
import logoImg from '../../../public/assets/images/logo.svg';
import {
  Wrapper,
  Container,
  Main,
  MainContent,
  GoggleBtn,
  RoomForm,
  Divider,
} from './style';

function Homepage(): JSX.Element {
  return (
    <Wrapper>
      <Container>
        <img src={illustrationImg} alt="Illustration symbolizing questions and answers" />
        <strong>Create live Q&amp;A rooms</strong>
        <p>Remove your audience&apos;s doubts in real time</p>
      </Container>
      <Main>
        <MainContent>
          <img src={logoImg} alt="Letmeask" />
          <GoggleBtn type="button">
            <img src={GoogleIconImage} alt="Google logo" />
            Create your room with Goggle
          </GoggleBtn>
          <Divider>Or enter a room</Divider>
          <RoomForm action="">
            <input
              type="text"
              placeholder="Write the room code"
            />
            <button type="submit">
              Enter at room
            </button>
          </RoomForm>
        </MainContent>
      </Main>
    </Wrapper>
  );
}

export default Homepage;
