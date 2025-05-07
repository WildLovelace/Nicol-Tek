import styled from "styled-components";
import { theme } from "../../styles/theme";

export const FooterContainer = styled.footer`
  background-color: ${theme.colors.dark};
  color: ${theme.colors.textLight};
  padding: 4rem 0 1rem;
  position: relative;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 3rem 0 1rem;
  }
`;

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 3rem;
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  padding: 0 1rem;

  @media (max-width: ${theme.breakpoints.md}) {
    gap: 2rem;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    width: 95%;
  }
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  z-index: 2;

  &:first-child {
    @media (max-width: ${theme.breakpoints.md}) {
      grid-column: 1 / -1;
      text-align: center;
      align-items: center;
    }
  }
`;

export const FooterTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: ${theme.colors.accent};
  font-family: ${theme.fonts.heading};
  font-weight: 600;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 50px;
    height: 2px;
    background: ${theme.colors.accent};

    @media (max-width: ${theme.breakpoints.md}) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

export const FooterText = styled.p`
  line-height: 1.6;
  opacity: 0.9;
  font-size: 0.95rem;

  @media (max-width: ${theme.breakpoints.md}) {
    max-width: 80%;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    max-width: 100%;
  }
`;

export const FooterLink = styled.a`
  color: ${theme.colors.textLight};
  display: flex;
  align-items: center;
  gap: 0.8rem;
  transition: all 0.3s ease;
  font-size: 0.95rem;
  opacity: 0.9;
  width: fit-content;

  svg {
    flex-shrink: 0;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: ${theme.colors.accent};
    opacity: 1;
    transform: translateX(5px);

    svg {
      transform: scale(1.1);
    }
  }

  @media (max-width: ${theme.breakpoints.md}) {
    &:hover {
      transform: none;
    }
  }
`;

export const FooterSocial = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;

  ${FooterLink} {
    background: rgba(255, 255, 255, 0.1);
    padding: 0.5rem;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: ${theme.colors.accent};
      color: white;
    }
  }
`;

export const FooterBottom = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.85rem;
  opacity: 0.7;
  position: relative;
  z-index: 2;

  @media (max-width: ${theme.breakpoints.sm}) {
    margin-top: 2rem;
    padding-top: 1rem;
  }
`;
