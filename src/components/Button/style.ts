import styled from 'styled-components';

export const ButtonComponent = styled.button<{ isOutlined: boolean }>`
  height: 50px;

  border-radius: 8px;

  font-weight: 500;

  background: ${({ isOutlined, theme }) => (isOutlined ? theme.colors.thirdBackground : theme.colors.scndBackground)};
  color: ${({ isOutlined, theme }) => (isOutlined ? theme.colors.scndBackground : theme.colors.white)};

  padding: 0 32px;

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
`;
