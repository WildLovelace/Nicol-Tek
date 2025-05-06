import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const HeroContainer = styled.section`
  position: relative;
  height: 100vh;
  min-height: 600px;
  overflow: hidden;
`;

export const HeroVideoBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  
  iframe {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 3;
  height: 100%;
  display: flex;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 2rem;
  color: ${theme.colors.textLight};

  p {
    font-size: 1.2rem;
    max-width: 600px;
    margin: 1.5rem 0 2rem;
    line-height: 1.6;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 4rem;
  margin: 0.5rem 0;
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.accent};

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 3rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  margin: 0;

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 1.2rem;
  }
`;

export const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: ${theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;