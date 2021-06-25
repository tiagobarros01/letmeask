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

    border-radius: 624.938rem;

    padding: 0.5rem 1rem;

    color: ${({ theme }) => theme.colors.white};

    font-weight: 800;
    font-size: 0.875rem;
  }
`;

export const List = styled.div`
  margin-top: 2rem;

  @media (max-width: 576px) {
    max-height: 35rem;

    overflow-y: scroll;
  }
`;

export const CheckButton = styled.button`
  :hover {
    svg path, circle {
      stroke: ${({ theme }) => theme.colors.scndBackground};
    }
  }
`;

export const HighlightButton = styled.button`
  :hover {
    svg path {
      stroke: ${({ theme }) => theme.colors.scndBackground};
    }
  }
`;

export const RemoveButton = styled.button`
  :hover {
    svg path {
      stroke: ${({ theme }) => theme.colors.redGoogle};
    }
  }
`;
