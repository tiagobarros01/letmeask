import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`;

export const Container = styled.aside`
  flex: 7;

  background: ${({ theme }) => theme.colors.scndBackground};
  color: ${({ theme }) => theme.colors.title};

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 120px 80px;

  img {
    max-width: 320px;
  }

  strong {
    font: 700 36px 'Poppins', sans-serif;
    line-height: 42px;
    margin-top: 16px;
  }

  p {
    font-size: 24px;
    line-height: 32px;
    margin-top: 16px;

    color: ${({ theme }) => theme.colors.background};
  }
`;

export const Main = styled.main`
  flex: 8;

  padding: 0 32px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  width: 100%;
  max-width: 320px;

  text-align: center;

  > img {
    align-self: center;
  }

  h2 {
    font-size: 24px;
    margin: 64px 0 24px;

    font-family: 'Poppins', sans-serif;
  }

  p {
    font-size: 14px;

    color: ${({ theme }) => theme.colors.details};

    margin-top: 16px;
  }

  a {
    color: ${({ theme }) => theme.colors.link}
  }
`;

export const CreateRoomForm = styled.form`
  input {
    height: 50px;

    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.border};

    padding: 0 16px;

    background: ${({ theme }) => theme.colors.title};
  }

  button {
    margin-top: 16px;
  }

  button,
  input {
    width: 100%;
  }
`;
