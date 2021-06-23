import styled from 'styled-components';

export const Wrapper = styled.div`
  header {
    padding: 24px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.background};
  }
`;

export const Content = styled.div`
  max-width: 1120px;

  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > img {
    max-height: 45px;
  }
`;

export const Main = styled.main`
  max-width: 800px;

  margin: 0 auto;
`;

export const TitleContainer = styled.div`
  margin: 32px 0 24px;

  display: flex;
  align-items: center;

  h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 24px;

    color: ${({ theme }) => theme.colors.text};
  }

  span {
    margin-left: 16px;

    background: ${({ theme }) => theme.colors.link};

    border-radius: 9999px;

    padding: 8px 16px;

    color: ${({ theme }) => theme.colors.title};

    font-weight: 800;
    font-size: 14px;
  }
`;

export const QuestionsForm = styled.form`
  textarea {
    width: 100%;

    border: 0;

    padding: 16px;

    border-radius: 8px;

    background: ${({ theme }) => theme.colors.thirdBackground};

    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);

    resize: vertical;
    min-height: 130px;
  }
`;

export const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 16px;

  span {
    font-size: 14px;
    font-weight: 500;
    
    color: ${({ theme }) => theme.colors.details};

    button {
      background: transparent;

      border: 0;

      color: ${({ theme }) => theme.colors.scndBackground};

      text-decoration: underline;

      font-size: 14px;
      font-weight: 500;

      cursor: pointer;
    }
  }
`;
