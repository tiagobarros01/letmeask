import styled from 'styled-components';

export const ButtonComponent = styled.button`
  height: 50px;

  border-radius: 8px;

  font-weight: 500;

  background: ${({ theme }) => theme.colors.scndBackground};
  color: ${({ theme }) => theme.colors.title};

  padding: 0 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 0;

  transition: filter 200ms;

  :not(:disabled):hover {
    filter: brightness(0.9);
  }

  :disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
