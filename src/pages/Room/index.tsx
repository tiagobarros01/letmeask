import React, { FormEvent, useState } from 'react';
import { useParams } from 'react-router-dom';

import LogoImg from '../../assets/images/logo.svg';
import { Button } from '../../components/Button';
import { Question } from '../../components/Question';
import { RoomCode } from '../../components/RoomCode';
import { useAuth } from '../../hooks/useAuth';
import { useRoom } from '../../hooks/useRoom';
import { database } from '../../services/firebase';
import {
  Wrapper,
  Content,
  Main,
  TitleContainer,
  QuestionsForm,
  FormFooter,
  UserInfo,
  List,
} from './style';

type RoomParams = {
  id: string;
}

export default function Room(): JSX.Element {
  const { user } = useAuth();
  const { id: roomId } = useParams<RoomParams>();
  const [newQuestion, setNewQuestion] = useState<string>('');

  const { questions, title } = useRoom(roomId);

  async function handleSendQuestion(event: FormEvent) {
    event.preventDefault();

    if (newQuestion.trim() === '') {
      return;
    }

    if (!user) {
      throw new Error('You must be logged in');
    }

    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar,
      },
      isHighlighted: false,
      isAnswered: false,
    };

    await database.ref(`rooms/${roomId}/questions`).push(question);

    setNewQuestion('');
  }

  return (
    <Wrapper>
      <header>
        <Content>
          <img src={LogoImg} alt="Letmeask" />
          <RoomCode code={roomId} />
        </Content>
      </header>
      <Main>
        <TitleContainer>
          <h1>
            Room
            {' '}
            {title}
          </h1>
          { questions.length > 0 && (
          <span>
            {questions.length}
            {' '}
            question(s)
          </span>
          )}
        </TitleContainer>

        <QuestionsForm onSubmit={handleSendQuestion}>
          <textarea
            placeholder="What do you want to ask?"
            onChange={(event) => setNewQuestion(event.target.value)}
            value={newQuestion}
          />

          <FormFooter>
            {user ? (
              <UserInfo>
                <img src={user.avatar} alt={user.name} />
                <span>{user.name}</span>
              </UserInfo>
            ) : (
              <span>
                To send a question,
                {' '}
                <button type="button">login</button>
                .
              </span>
            )}

            <Button type="submit" disabled={!user}>
              Send question
            </Button>
          </FormFooter>
        </QuestionsForm>
        <List>
          {questions.map((question) => (
            <Question
              content={question.content}
              author={question.author}
              key={question.id}
            />
          ))}
        </List>
      </Main>
    </Wrapper>
  );
}
