import React from 'react';
import { useParams } from 'react-router-dom';

import LogoImg from '../../assets/images/logo.svg';
import { Button } from '../../components/Button';
import { RoomCode } from '../../components/RoomCode';
import {
  Wrapper,
  Content,
  Main,
  TitleContainer,
  QuestionsForm,
  FormFooter,
} from './style';

interface RoomParams {
  id: string;
}

export default function Room(): JSX.Element {
  const params = useParams<RoomParams>();

  return (
    <Wrapper>
      <header>
        <Content>
          <img src={LogoImg} alt="Letmeask" />
          <RoomCode code={params.id} />
        </Content>
      </header>
      <Main>
        <TitleContainer>
          <h1>React Room</h1>
          <span>4 questions</span>
        </TitleContainer>

        <QuestionsForm>
          <textarea placeholder="What do you want to ask?" />

          <FormFooter>
            <span>
              To send a question,
              {' '}
              <button type="button">login</button>
              .
            </span>
            <Button type="submit">Send question</Button>
          </FormFooter>
        </QuestionsForm>
      </Main>
    </Wrapper>
  );
}
