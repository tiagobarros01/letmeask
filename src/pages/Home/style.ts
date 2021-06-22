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
`;

export const GoggleBtn = styled.button`
  height: 50px;

  margin-top: 64px;
  border-radius: 8px;

  font-weight: 500;

  background: ${({ theme }) => theme.colors.redGoogle};
  color: ${({ theme }) => theme.colors.title};

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 0;

  transition: filter 200ms;

  :hover {
    filter: brightness(0.9);
  }

  img {
    margin-right: 8px;
  }
`;

export const Divider = styled.div`
  font-size: 14px;

  margin: 32px 0;

  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.colors.border};

  ::before {
    content: '';

    flex: 1;

    height: 1px;

    background: ${({ theme }) => theme.colors.border};

    margin-right: 16px;
  }

  ::after {
    content: '';

    flex: 1;

    height: 1px;

    background: ${({ theme }) => theme.colors.border};

    margin-left: 16px;
  }
`;

export const RoomForm = styled.form`
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
