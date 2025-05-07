import styled from "styled-components";
import { theme } from "../../styles/theme";

interface SectionContainerProps {
  bgColor?: string;
  textColor?: string;
  padding?: string;
  fullWidth?: boolean;
}

interface TitleProps {
  align?: "left" | "center" | "right";
}

export const SectionContainer = styled.section<SectionContainerProps>`
  padding: ${({ padding }) => padding};
  background-color: ${({ bgColor }) => bgColor || theme.colors.light};
  color: ${({ textColor }) => textColor || theme.colors.textDark};
  position: relative;
  overflow: hidden;
  width: 100%;
`;

export const SectionContent = styled.div<SectionContainerProps>`
  max-width: ${({ fullWidth }) => (fullWidth ? "100%" : "1200px")};
  width: 95%;
  margin: 0 auto;
  padding: ${({ fullWidth }) => (fullWidth ? "0" : "0 1.5rem")};

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 100%;
    padding: ${({ fullWidth }) => (fullWidth ? "0" : "0 1rem")};
  }
`;

export const SectionTitle = styled.h2<TitleProps>`
  font-size: clamp(1.8rem, 5vw, 2.8rem);
  margin-bottom: 1.5rem;
  text-align: ${({ align }) => align};
  position: relative;
  font-family: ${theme.fonts.heading};
  color: ${({ color }) => color || theme.colors.primary};
  font-weight: 700;
  line-height: 1.2;

  &::after {
    content: "";
    display: block;
    width: ${({ align }) => (align === "center" ? "80px" : "60px")};
    height: 4px;
    background-color: ${theme.colors.accent};
    margin: ${({ align }) =>
      align === "center"
        ? "1.5rem auto 0"
        : align === "right"
        ? "1.5rem 0 0 auto"
        : "1.5rem 0 0"};
    transition: width 0.3s ease;

    @media (max-width: ${theme.breakpoints.md}) {
      height: 3px;
      margin: 1rem auto;
    }
  }

  @media (max-width: ${theme.breakpoints.md}) {
    margin: 1rem 0;
  }
`;

export const SectionSubtitle = styled.p<TitleProps>`
  font-size: clamp(1rem, 2vw, 1.2rem);
  text-align: ${({ align }) => align};
  color: ${theme.colors.textSecondary};
  max-width: 700px;
  margin: ${({ align }) =>
    align === "center"
      ? "0 auto 2rem"
      : align === "right"
      ? "0 0 2rem auto"
      : "0 0 2rem"};
  line-height: 1.6;

  @media (max-width: ${theme.breakpoints.md}) {
    margin-bottom: 1.5rem;
  }
`;
