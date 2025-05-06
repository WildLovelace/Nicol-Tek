import styled from 'styled-components';
import { theme } from '../../styles/theme';

interface ButtonContainerProps {
      variant: 'primary' | 'secondary' | 'outline' | 'text';
      size: 'small' | 'medium' | 'large';
      fullWidth: boolean;
      disabled?: boolean;
}

const getPadding = (size: string) => {
      switch (size) {
            case 'small': return '0.5rem 1rem';
            case 'large': return '1rem 2rem';
            default: return '0.75rem 1.5rem';
      }
};

const getFontSize = (size: string) => {
      switch (size) {
            case 'small': return '0.875rem';
            case 'large': return '1.125rem';
            default: return '1rem';
      }
};

const getMobileFontSize = (size: string) => {
      switch (size) {
            case 'small': return '0.75rem';
            case 'large': return '1rem';
            default: return '0.875rem';
      }
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  background-color: ${({ variant, disabled }) => {
            if (disabled) return theme.colors.disabled;
            return variant === 'primary'
                  ? theme.colors.primary
                  : variant === 'secondary'
                        ? theme.colors.secondary
                        : variant === 'text'
                              ? 'transparent'
                              : 'transparent';
      }};
  
  color: ${({ variant, disabled }) => {
            if (disabled) return theme.colors.textDisabled;
            return variant === 'outline'
                  ? theme.colors.primary
                  : variant === 'text'
                        ? theme.colors.primary
                        : theme.colors.textLight;
      }};
  
  border: ${({ variant }) =>
            variant === 'outline'
                  ? `2px solid ${theme.colors.primary}`
                  : variant === 'text'
                        ? 'none'
                        : 'none'};
  
  padding: ${({ size }) => getPadding(size)};
  font-size: ${({ size }) => getFontSize(size)};
  border-radius: 8px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  font-weight: 600;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  position: relative;
  overflow: hidden;
  min-height: ${({ size }) =>
            size === 'small' ? '36px' : size === 'medium' ? '44px' : '52px'};
  
  .button-icon {
    display: flex;
    align-items: center;
    transition: transform 0.2s ease;
  }

  &:hover:not(:disabled) {
    background-color: ${({ variant }) => {
            if (variant === 'primary') return '#1a73e8';
            if (variant === 'secondary') return '#c0392b';
            if (variant === 'outline') return 'rgba(0, 128, 255, 0.1)';
            if (variant === 'text') return 'rgba(0, 128, 255, 0.05)';
            return theme.colors.primary;
      }};
    transform: translateY(-1px);
    box-shadow: ${({ variant }) =>
            variant !== 'text' ? '0 2px 8px rgba(0, 0, 0, 0.15)' : 'none'};
    
    .button-icon {
      transform: ${({ size }) =>
            size === 'large' ? 'scale(1.1)' : 'scale(1.05)'};
    }
  }

  &:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: none;
    transition-duration: 0.1s;
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.accent};
    outline-offset: 2px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.2);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover:not(:disabled)::after {
    opacity: 1;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${({ size }) =>
            size === 'small' ? '0.4rem 0.8rem' :
                  size === 'large' ? '0.8rem 1.5rem' : '0.6rem 1.2rem'};
    font-size: ${({ size }) => getMobileFontSize(size)};
    min-height: ${({ size }) =>
            size === 'small' ? '32px' : size === 'medium' ? '40px' : '48px'};
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    border-radius: 6px;
  }
`;