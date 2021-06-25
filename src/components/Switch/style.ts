import { FiMoon, FiSun } from 'react-icons/fi';
import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;

  bottom: 1.5rem;
  right: 1.5rem;

  z-index: 10;

  width: 4rem;
  height: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;
  
  background: ${({ theme }) => theme.colors.thirdBackground};

  border-radius: 50%;

  cursor: pointer;
`;

export const Light = styled(FiMoon)`
  font-size: 1.8rem;

  color: ${({ theme }) => theme.colors.title};
`;

export const Dark = styled(FiSun)`
  font-size: 1.8rem;

  color: ${({ theme }) => theme.colors.title};
`;
