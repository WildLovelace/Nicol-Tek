import styled from 'styled-components';
import { theme } from '../../styles/theme';

interface HeaderContainerProps {
  isScrolled: boolean;
  isMenuOpen: boolean;
}

interface MobileMenuButtonProps {
  isMenuOpen: boolean;
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: ${({ isScrolled }) =>
    isScrolled ? 'rgba(44, 62, 80, 0.9)' : 'transparent'};
  transition: all 0.3s ease;
  padding: 2rem 0;
  backdrop-filter: ${({ isScrolled }) => (isScrolled ? 'blur(10px)' : 'none')};
  box-shadow: ${({ isScrolled }) =>
    isScrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 0 1rem;
  }
`;

export const Logo = styled.div`
  width: 180px;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  @media (max-width: ${theme.breakpoints.md}) {
    width: 305px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 205px;
  }
`;

export const NavList = styled.ul<{ isMenuOpen: boolean }>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;

  @media (max-width: ${theme.breakpoints.md}) {
    justify-content:space-evenly;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    background-color: ${theme.colors.primary};
    flex-direction: column;
    padding: 2rem 0;
    gap: 1.5rem;
    clip-path: ${({ isMenuOpen }) =>
    isMenuOpen ? 'circle(150% at 90% -10%)' : 'circle(0px at 90% -10%)'};
    transition: clip-path 0.5s ease-in-out, opacity 0.3s ease;
    opacity: ${({ isMenuOpen }) => (isMenuOpen ? 1 : 0)};
    pointer-events: ${({ isMenuOpen }) => (isMenuOpen ? 'all' : 'none')};
    height: 100vh;
    overflow-y: auto;
  }
`;

export const NavItem = styled.li`
  color: ${theme.colors.textLight};
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s ease;
  font-size: 1.1rem;
  text-align: center;

  &:hover {
    color: ${theme.colors.accent};
  }

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 1.4rem;
    padding: 0.5rem 0;
    width: 100%;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: 2rem;
  }
`;

export const MobileMenuButton = styled.div<MobileMenuButtonProps>`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  position: relative;

  span {
    width: 100%;
    height: 3px;
    background: ${theme.colors.textLight};
    border-radius: 3px;
    transition: all 0.3s ease;
    transform-origin: left center;
    opacity: 1;

    &:nth-child(1) {
      transform: ${({ isMenuOpen }) =>
    isMenuOpen ? 'rotate(45deg) translate(1px, -2px)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      opacity: ${({ isMenuOpen }) => (isMenuOpen ? 0 : 1)};
      transform: ${({ isMenuOpen }) =>
    isMenuOpen ? 'translateX(-20px)' : 'translateX(0)'};
    }

    &:nth-child(3) {
      transform: ${({ isMenuOpen }) =>
    isMenuOpen ? 'rotate(-45deg) translate(1px, 2px)' : 'rotate(0)'};
    }
  }

  @media (max-width: ${theme.breakpoints.md}) {
    display: flex;
  }
`;