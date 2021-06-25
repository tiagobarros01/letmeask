import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;


  @media (max-width: 576px) {
    flex-direction: column;

    flex: 5;
  }
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

  @media (max-width: 576px) {
    max-height: 40rem;

    flex: 5;

    align-items: center;

    padding: 3rem;

    img {
      max-width: 15rem;
    }
  }
`;

export const Main = styled.main`
  flex: 8;

  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 576px) {
    flex: 11;

    padding: 2rem 2rem;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  width: 100%;
  max-width: 20rem;

  text-align: center;

  > svg {
    align-self: center;
  }

  h2 {
    font-size: 1.5rem;
    margin: 4rem 0 1.5rem;

    color: ${({ theme }) => theme.colors.title};

    font-family: 'Poppins', sans-serif;
  }

  p {
    font-size: 0.875rem;

    color: ${({ theme }) => theme.colors.details};

    margin-top: 1rem;
  }

  a {
    color: ${({ theme }) => theme.colors.link}
  }
`;

export const CreateRoomForm = styled.form`
  input {
    height: 3.125rem;

    border-radius: 0.5rem;
    border: ${({ theme }) => (theme.title === 'light' ? 1 : 0)}px solid
      ${({ theme }) => theme.colors.border};
      
    padding: 0 1rem;

    background: ${({ theme }) => theme.colors.thirdBackground};

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
