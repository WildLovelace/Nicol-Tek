import styled from 'styled-components';
import { theme } from '../../styles/theme';

interface SectionContainerProps {
    bgColor?: string;
    textColor?: string;
}

export const SectionContainer = styled.section<SectionContainerProps>`
  padding: 5rem 0;
  background-color: ${({ bgColor }) => bgColor || theme.colors.light};
  color: ${({ textColor }) => textColor || theme.colors.text};
`;

export const SectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
  position: relative;
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.primary};

  &::after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background-color: ${theme.colors.accent};
    margin: 1rem auto 0;
  }
`;