import styled from 'styled-components';

export const ButtonComponent = styled.button<{ isOutlined: boolean }>`
  height: 3.125rem;

  border-radius: .5rem;

  font-weight: 500;

  background: ${({ isOutlined, theme }) => (isOutlined ? theme.colors.thirdBackground : theme.colors.scndBackground)};
  color: ${({ isOutlined, theme }) => (isOutlined ? theme.colors.scndBackground : theme.colors.white)};

  padding: 0 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: ${({ isOutlined }) => (isOutlined ? 1 : 0)}px
          solid
          ${({ isOutlined, theme }) => (isOutlined ? theme.colors.scndBackground : theme.colors.scndBackground)};

  transition: filter 200ms;

  :not(:disabled):hover {
    filter: brightness(0.9);
  }

  :disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (max-width: 576px) {
    font-size: 1.1rem;
    
    padding: 0 1rem;
  }

`;
