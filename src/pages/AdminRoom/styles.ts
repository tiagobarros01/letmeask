import styled from 'styled-components';

export const Wrapper = styled.div`
  header {
    padding: 1.5rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.background};
  }
`;

export const Content = styled.div`
  max-width: 70rem;

  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > svg {
    max-height: 2.813rem;
  }
`;

export const ButtonsContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 1rem;

  button {
    height: 2.5rem;
  }
`;

export const Main = styled.main`
  max-width: 50rem;

  margin: 0 auto;
`;

export const TitleContainer = styled.div`
  margin: 2rem 0 1.5rem;

  display: flex;
  align-items: center;

  h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;

    color: ${({ theme }) => theme.colors.text};
  }

  span {
    margin-left: 1rem;

    background: ${({ theme }) => theme.colors.link};

    border-radius: 624.938rem;

    padding: 0.5rem 1rem;

    color: ${({ theme }) => theme.colors.title};

    font-weight: 800;
    font-size: 0.875rem;
  }
`;

export const QuestionsForm = styled.form`
  textarea {
    width: 100%;

    border: 0;

    padding: 1rem;

    border-radius: 0.5rem;

    background: ${({ theme }) => theme.colors.thirdBackground};

    box-shadow: 0 2px 0.75rem rgba(0, 0, 0, 0.04);

    resize: vertical;
    min-height: 8.125rem;
  }
`;

export const List = styled.div`
  margin-top: 2rem;
`;
