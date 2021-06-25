import React from 'react';

import { useTheme } from '../../hooks/useTheme';
import { Container, Dark, Light } from './style';

export function Switch(): JSX.Element {
  const { theme: { title }, toggleTheme } = useTheme();

  return (
    <Container onClick={toggleTheme}>
      {title === 'light' ? <Dark /> : <Light />}
    </Container>
  );
}
