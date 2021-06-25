import styled from 'styled-components';

export const ButtonComponent = styled.button`
  height: 40px;
  
  border-radius: 8px;

  overflow: hidden;

  background: ${({ theme }) => theme.colors.thirdBackground};

  border: 1px solid ${({ theme }) => theme.colors.scndBackground};

  cursor: pointer;

  display: flex;

  div {
    background: ${({ theme }) => theme.colors.scndBackground};

    height: 100%;

    padding: 0 12px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  span {
    display: block;
    align-self: center;

    flex: 1;

    padding: 0 16px 0 12px;
    
    width: 255px;
    
    color: ${({ theme }) => theme.colors.title};

    font-size: 14px;
    font-weight: 500;
  }
`;
