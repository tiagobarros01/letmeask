import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`;

export const Container = styled.aside`
  flex: 7;

  background: ${({ theme }) => theme.colors.scndBackground};
  color: ${({ theme }) => theme.colors.white};

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 7.5rem 5rem;

  img {
    max-width: 20rem;
  }

  strong {
    font: 700 2.25rem 'Poppins', sans-serif;
    line-height: 2.625rem;
    margin-top: 1rem;
  }

  p {
    font-size: 1.5rem;
    line-height: 2rem;
    margin-top: 1rem;

    color: ${({ theme }) => theme.colors.text};
  }
`;

export const Main = styled.main`
  flex: 8;

  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  width: 100%;
  max-width: 20rem;

  text-align: center;

  svg {
    align-self: center;
  }
`;

export const GoggleBtn = styled.button`
  height: 3.125rem;

  margin-top: 4rem;
  border-radius: 0.5rem;

  font-weight: 500;

  background: ${({ theme }) => theme.colors.redGoogle};
  color: ${({ theme }) => theme.colors.white};

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
    margin-right: 0.5rem;
  }
`;

export const Divider = styled.div`
  font-size: 0.875rem;

  margin: 2rem 0;

  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.colors.border};

  ::before {
    content: '';

    flex: 1;

    height: 1px;

    background: ${({ theme }) => theme.colors.border};

    margin-right: 1rem;
  }

  ::after {
    content: '';

    flex: 1;

    height: 1px;

    background: ${({ theme }) => theme.colors.border};

    margin-left: 1rem;
  }
`;

export const RoomForm = styled.form`
  input {
    height: 3.125rem;

    border-radius: 0.5rem;
    border: ${({ theme }) => (theme.title === 'light' ? 1 : 0)}px solid
      ${({ theme }) => theme.colors.border};

    padding: 0 1rem;

    background: ${({ theme }) => theme.colors.thirdBackground};
    color: ${({ theme }) => theme.colors.title};

    ::placeholder {
      color: ${({ theme }) => theme.colors.placeholder};
    }
  }

  button {
    margin-top: 1rem;
  }

  button,
  input {
    width: 100%;
  }
`;
