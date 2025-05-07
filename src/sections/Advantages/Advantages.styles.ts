import styled from "styled-components";
import { theme } from "../../styles/theme";

export const AdvantagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 0 auto;
  padding: 0 1rem;
  max-width: 1200px;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    gap: 1.5rem;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0 0.75rem;
  }
`;

export const AdvantageItem = styled.div`
  height: auto;
  min-height: 280px;
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;

  .advantage-icon {
    color: #3498db;
    margin-bottom: 1rem;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }

  h3 {
    color: ${theme.colors.primary};
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  p {
    color: ${theme.colors.text};
    line-height: 1.6;
    font-size: 0.95rem;
    margin-top: auto;
  }

  @media (max-width: 992px) {
    min-height: 260px;
    padding: 1.25rem;
  }

  @media (max-width: 768px) {
    min-height: 240px;
    padding: 1rem;

    h3 {
      font-size: 1.15rem;
      margin-bottom: 0.8rem;
    }

    p {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 576px) {
    min-height: 200px;
    padding: 1.25rem;

    .advantage-icon svg {
      width: 35px;
      height: 35px;
    }

    h3 {
      font-size: 1.5rem;
    }

    p {
      font-size: 0.85rem;
    }
  }

  @media (max-width: 400px) {
    min-height: 180px;
    padding: 1rem;
  }
`;
