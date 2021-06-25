import styled from 'styled-components';

export const Wrapper = styled.div`
  header {
    padding: 1.5rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.background};

    @media (max-width: 576px) {
      padding: 2rem;
    }
  }
`;

export const Content = styled.div`
  max-width: 70rem;

  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > svg {
    max-height: 2.8rem;
  }
`;

export const Main = styled.main`
  max-width: 50rem;

  margin: 0 auto;

  @media (max-width: 576px) {
    padding: 0 2rem;
  }
`;

export const TitleContainer = styled.div`
  margin: 2rem 0 1.5rem;

  display: flex;
  align-items: center;

  h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;

    color: ${({ theme }) => theme.colors.title};
  }

  span {
    margin-left: 1rem;

    background: ${({ theme }) => theme.colors.link};

    border-radius: 624rem;

    padding: .5rem 1rem;

    color: ${({ theme }) => theme.colors.white};

    font-weight: 800;
    font-size: .875rem;
  }
`;

export const QuestionsForm = styled.form`
  textarea {
    width: 100%;

    border: 0;

    padding: 1rem;

    border-radius: .5rem;

    background: ${({ theme }) => theme.colors.thirdBackground};
    color: ${({ theme }) => theme.colors.title};

    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);

    resize: vertical;
    min-height: 8.125rem;
  }
`;

export const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 1rem;

  > span {
    font-size: .875rem;
    font-weight: 500;
    
    color: ${({ theme }) => theme.colors.details};

    button {
      background: transparent;

      border: 0;

      color: ${({ theme }) => theme.colors.scndBackground};

      text-decoration: underline;

      font-size: .875rem;
      font-weight: 500;

      cursor: pointer;
    }
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 2.5rem;
    height: 2.5rem;

    border-radius: 50%
  }

  span {
    margin-left: .5rem;

    color: ${({ theme }) => theme.colors.title};

    font-weight: 500;
    font-size: 1rem;
  }
`;

export const List = styled.div`
  margin-top: 2rem;

  @media (max-width: 576px) {
    max-height: 20rem;

    overflow-y: scroll;
  }
`;

export const LikeButton = styled.button<{ liked: boolean }>`
  border: 0;

  background: transparent;

  cursor: pointer;

  display: flex;
  align-items: flex-end;

  gap: .5rem;

  color: ${({ liked, theme }) => (liked ? theme.colors.liked : theme.colors.details)};

  transition: filter 200ms;

  svg path {
    stroke: ${({ liked, theme }) => (liked ? theme.colors.liked : theme.colors.details)}
  }

  :hover {
    filter: brightness(0.7);
  }
`;
