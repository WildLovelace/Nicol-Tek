import styled from "styled-components";
import { theme } from "../../styles/theme";

export const AboutContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
  font-size: 1.1rem;
  line-height: 1.8;

  p {
    text-align: left;
    margin-bottom: 2rem;
  }
  p:nth-child(1) {
    @media (max-width: 768px) {
      display: none;
    }
  }

  .about-items-grid {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  }

  @media (max-width: 576px) {
    font-size: 1rem;
    padding: 0 0.5rem;
  }
`;

export const AboutItem = styled.div`
  height: auto;
  min-height: 300px;
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;

  .about-item-icon {
    color: ${theme.colors.primary};
    margin-bottom: 1rem;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }

  h3 {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
    color: ${theme.colors.textDark};
  }

  p {
    color: ${theme.colors.text};
    font-size: 1rem;
    text-align: center;
    margin-top: auto;
  }

  @media (max-width: 768px) {
    padding: 1.2rem;
    min-height: 250px;

    h3 {
      font-size: 1.5rem;
    }

    p {
      font-size: 0.95rem;
    }
  }

  @media (max-width: 480px) {
    min-height: auto;
    padding: 1rem;

    .about-item-icon {
      margin-bottom: 0.8rem;

      svg {
        width: 40px;
        height: 40px;
      }
    }

    h3 {
      font-size: 1.5rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`;
