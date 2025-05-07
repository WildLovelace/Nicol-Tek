import styled from "styled-components";
import { theme } from "../../styles/theme";

export const TeamContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  overflow: hidden;
  padding: 0 1rem;

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 0 0.5rem;
  }
`;

export const TeamSlider = styled.div`
  display: flex;
  width: 100%;
  transition: transform 0.5s ease;
`;

export const TeamSlide = styled.div`
  min-width: 100%;
  padding: 0 1rem;
  box-sizing: border-box;
  display: flex;
  gap: 1.5rem;
  justify-content: center;

  @media (max-width: ${theme.breakpoints.lg}) {
    padding: 0 0.75rem;
    gap: 1rem;
  }
`;

export const TeamMember = styled.div`
  text-align: center;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  flex: 1;

  .photo-container {
    width: 100%;
    height: 350px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
  }

  .member-info {
    padding: 1.5rem 1rem;
  }

  h3 {
    margin: 0 0 0.5rem;
    color: ${theme.colors.primary};
    font-size: 1.25rem;
  }

  p {
    color: ${theme.colors.text};
    font-size: 0.95rem;
    line-height: 1.5;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);

    img {
      transform: scale(1.05);
    }
  }

  @media (max-width: ${theme.breakpoints.lg}) {
    min-width: calc(50% - 0.5rem);
    max-width: calc(50% - 0.5rem);

    .photo-container {
      height: 300px;
    }
  }

  @media (max-width: ${theme.breakpoints.md}) {
    .photo-container {
      height: 250px;
    }

    .member-info {
      padding: 1rem 0.75rem;
    }

    h3 {
      font-size: 1.1rem;
    }

    p {
      font-size: 0.9rem;
    }
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    min-width: 100%;
    max-width: 100%;

    .photo-container {
      height: 280px;
    }
  }
`;

export const SliderDots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  gap: 0.5rem;
  height: 15px;

  button {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: none;
    background: #ccc;
    cursor: pointer;
    transition: all 0.3s ease;
    padding: 0;

    &.active {
      background: ${theme.colors.primary};
      transform: scale(1.2);
    }

    &:hover {
      background: ${theme.colors.accent};
    }
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    margin-top: 1rem;
  }
`;
