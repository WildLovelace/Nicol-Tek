import styled from "styled-components";
import { theme } from "../../styles/theme";

export const ActivitiesContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 0 auto;
  padding: 0 1rem;
  max-width: 1200px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0 0.5rem;
  }
`;

export const ActivityCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 350px;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: all 0.3s ease;

  .activity-icon {
    color: #e74c3c;
    margin-bottom: 1rem;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }

  h3 {
    color: ${theme.colors.primary};
    margin-bottom: 1rem;
    font-size: 1.3rem;
  }

  p {
    width: 100%;
    color: ${theme.colors.text};
    text-align: center;
    line-height: 1.6;
  }

  @media (max-width: 992px) {
    height: 320px;
    padding: 1.5rem;
  }

  @media (max-width: 768px) {
    height: 300px;
    padding: 1.2rem;

    h3 {
      font-size: 1.2rem;
      margin-bottom: 0.8rem;
    }

    p {
      font-size: 0.95rem;
    }
  }

  @media (max-width: 576px) {
    height: auto;
    min-height: 250px;
    padding: 1rem;

    .activity-icon svg {
      width: 35px;
      height: 35px;
    }

    h3 {
      font-size: 1.5rem;
    }

    p {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 400px) {
    min-height: 220px;
    padding: 0.8rem;
  }
`;
