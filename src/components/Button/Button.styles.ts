import styled from 'styled-components';
import { theme } from '../../styles/theme';

interface ButtonContainerProps {
    variant: 'primary' | 'secondary' | 'outline';
    size: 'small' | 'medium' | 'large';
    fullWidth: boolean;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  background-color: ${({ variant }) =>
        variant === 'primary'
            ? theme.colors.primary
            : variant === 'secondary'
                ? theme.colors.secondary
                : 'transparent'};
  color: ${({ variant }) =>
        variant === 'outline' ? theme.colors.primary : theme.colors.textLight};
  border: ${({ variant }) =>
        variant === 'outline' ? `2px solid ${theme.colors.primary}` : 'none'};
  padding: ${({ size }) =>
        size === 'small' ? '0.5rem 1rem' : size === 'medium' ? '0.75rem 1.5rem' : '1rem 2rem'};
  font-size: ${({ size }) =>
        size === 'small' ? '0.875rem' : size === 'medium' ? '1rem' : '1.125rem'};
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background-color: ${({ variant }) =>
        variant === 'primary'
            ? 'rgba(0, 128, 255, 0.5)'
            : variant === 'secondary'
                ? '#c0392b'
                : 'rgba(0, 128, 255, 0.5)'};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;