import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const FooterContainer = styled.footer`
  background-color: ${theme.colors.dark};
  color: ${theme.colors.textLight};
  padding: 3rem 0 1rem;
`;

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
 width: 90%;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FooterTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: ${theme.colors.accent};
  font-family: ${theme.fonts.heading};
`;

export const FooterLink = styled.a`
  color: ${theme.colors.textLight};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${theme.colors.accent};
  }
`;

export const FooterBottom = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
`;