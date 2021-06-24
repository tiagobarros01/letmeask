import React from 'react';

import { Container, Footer, UserInfo } from './style';

type Props = {
  content: string;
  author: {
    name: string;
    avatar: string;
  }
}

export function Question({ content, author }: Props): JSX.Element {
  return (
    <Container>
      <p>{content}</p>
      <Footer>
        <UserInfo>
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </UserInfo>
        <div />
      </Footer>
    </Container>
  );
}
