import styled from "styled-components";
import { theme } from "../../styles/theme";

export const HeroContainer = styled.section`
  position: relative;
  height: 100vh;
  min-height: 600px;
  max-height: 1200px;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.md}) {
    min-height: 500px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    min-height: 400px;
  }
`;

export const HeroVideoBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 100%;
    min-height: 100%;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    video {
      object-position: 60% center;
    }
  }
`;

export const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 2;

  @media (max-width: ${theme.breakpoints.md}) {
    background: rgba(0, 0, 0, 0.7);
  }
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

  @media (max-width: ${theme.breakpoints.lg}) {
    padding: 0 1.5rem;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 0 1.25rem;
    text-align: center;
    justify-content: center;

    p {
      font-size: 1.1rem;
      max-width: 500px;
      margin: 1.25rem auto 1.75rem;
    }
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 0 1rem;

    p {
      font-size: 1rem;
      max-width: 100%;
      margin: 1rem auto 1.5rem;
    }
  }

  @media (max-width: ${theme.breakpoints.xl}) {
    p {
      font-size: 0.95rem;
    }
  }
`;

export const HeroTitle = styled.h1`
  font-size: 4rem;
  margin: 0.5rem 0;
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.accent};
  line-height: 1.2;

  @media (max-width: ${theme.breakpoints.lg}) {
    font-size: 3.5rem;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 3rem;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: 2.5rem;
  }

  @media (max-width: ${theme.breakpoints.xl}) {
    font-size: 2rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  margin: 0;

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 1.2rem;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: 1.1rem;
  }

  @media (max-width: ${theme.breakpoints.xl}) {
    font-size: 1rem;
  }
`;

export const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: ${theme.breakpoints.md}) {
    justify-content: center;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    flex-direction: column;
    gap: 0.75rem;
    width: 100%;
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: ${theme.breakpoints.xl}) {
    max-width: 100%;
  }
`;
