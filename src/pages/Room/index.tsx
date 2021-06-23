import React from 'react';

import LogoImg from '../../assets/images/logo.svg';
import { Button } from '../../components/Button';
import {
  Wrapper,
  Content,
  Main,
  TitleContainer,
  QuestionsForm,
  FormFooter,
} from './style';

export default function Room(): JSX.Element {
  return (
    <Wrapper>
      <header>
        <Content>
          <img src={LogoImg} alt="Letmeask" />
          <div>Código</div>
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
