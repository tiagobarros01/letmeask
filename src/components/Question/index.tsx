/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
import React from 'react';

import { Container, Footer, UserInfo } from './style';

type Props = {
  content: string;
  author: {
    name: string;
    avatar: string;
  }
  children?: React.ReactNode;
}

export function Question({ content, author, children }: Props): JSX.Element {
  return (
    <Container className="question">
      <p>{content}</p>
      <Footer>
        <UserInfo>
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </UserInfo>
        <div>
          {children}
        </div>
      </Footer>
    </Container>
  );
}
