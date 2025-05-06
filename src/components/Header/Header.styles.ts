import styled from 'styled-components';
import { theme } from '../../styles/theme';

interface HeaderContainerProps {
  isScrolled: boolean;
  isMenuOpen: boolean;
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: ${({ isScrolled }) =>
    isScrolled ? 'rgba(44, 62, 80, 0.95)' : 'transparent'};
  transition: all 0.3s ease;
  padding: 1rem 0;
  backdrop-filter: ${({ isScrolled }) => (isScrolled ? 'blur(10px)' : 'none')};
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const Logo = styled.div`
text-algin: left;
  width: 50%;
  color: ${theme.colors.textLight};
  cursor: pointer;
  font-family: ${theme.fonts.heading};

  img{
  width: 50%;
  }
`;

export const NavList = styled.ul<{ isMenuOpen: boolean }>`
  display: flex;
  justify-content: right;
  list-style: none;
  gap: 2rem;
  width: 100%;

  @media (max-width: ${theme.breakpoints.md}) {
    position: fixed;
    top: 70px;
    left: 0;
    width: 100%;
    background-color: ${theme.colors.primary};
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;
    gap: 1.5rem;
    clip-path: ${({ isMenuOpen }) =>
    isMenuOpen ? 'circle(150% at 90% -10%)' : 'circle(0px at 90% -10%)'};
    transition: clip-path 0.5s ease-in-out;
    pointer-events: ${({ isMenuOpen }) => (isMenuOpen ? 'all' : 'none')};
    height: 100vh;
  }
`;

export const NavItem = styled.li`
  color: ${theme.colors.textLight};
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s ease;
  font-size: 1.5rem;
  &:hover {
    color: ${theme.colors.accent};
  }
`;

export const MobileMenuButton = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  span {
    width: 2rem;
    height: 0.25rem;
    background: ${theme.colors.textLight};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    display: flex;
  }
`;