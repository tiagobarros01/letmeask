import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.thirdBackground};

  border-radius: 8px;

  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);

  padding: 24px;

  + .question {
    margin-top: 8px;
  }

  p {
    color: ${({ theme }) => theme.colors.text};
  }

  button {
    border: 0;
    background: transparent;


    :hover {
      svg path {
        transition: all 200ms;
        stroke: ${({ theme }) => theme.colors.redGoogle};
      }
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 24px;
`;

export const UserInfo = styled.div`
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
