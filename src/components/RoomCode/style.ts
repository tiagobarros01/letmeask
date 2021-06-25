import styled from 'styled-components';

export const ButtonComponent = styled.button`
  height: 2.5rem;
  
  border-radius: 0.5rem;

  overflow: hidden;

  background: ${({ theme }) => theme.colors.thirdBackground};

  border: 1px solid ${({ theme }) => theme.colors.scndBackground};

  cursor: pointer;

  display: flex;

  div {
    background: ${({ theme }) => theme.colors.scndBackground};

    height: 100%;

    padding: 0 0.75rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  span {
    display: block;
    align-self: center;

    flex: 1;

    padding: 0 1rem 0 0.75rem;
    
    width: 15.938rem;
    
    color: ${({ theme }) => theme.colors.title};

    font-size: 0.875rem;
    font-weight: 500;

    @media (max-width: 576px) {
      width: 12rem;
    }

  }
`;
