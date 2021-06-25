/* eslint-disable no-nested-ternary */
import styled from 'styled-components';

export const Container = styled.div<{ isAnswered: boolean, isHighlighted: boolean }>`
  background: ${({ isAnswered, isHighlighted, theme }) => (isHighlighted === true && !isAnswered ? theme.colors.highlight : isAnswered === true ? theme.colors.answered : theme.colors.thirdBackground)};

  border: ${({ isAnswered, isHighlighted }) => (isHighlighted === true && !isAnswered ? 1 : 0)}px solid ${({ isHighlighted, theme }) => (isHighlighted === true ? theme.colors.scndBackground : theme.colors.thirdBackground)};

  border-radius: 8px;

  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);

  padding: 24px;

  + .question {
    margin-top: 8px;
  }

  p {
    color: ${({ theme }) => theme.colors.title};
  }

  button {
    border: 0;
    background: transparent;
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 24px;

  > div {
    display: flex;

    gap: .875rem;
  }
`;

export const UserInfo = styled.div<{ isAnswered: boolean, isHighlighted: boolean }>`
  display: flex;
  align-items: center;

  img {
    width: 32px;
    height: 32px;

    border-radius: 50%;
  }

  span {
    margin-left: 8px;

    color: ${({ theme }) => theme.colors.details};

    font-size: 14px;
  }
`;
