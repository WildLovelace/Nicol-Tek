import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const AdvantagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1300px;
  margin: 0 auto;
`;

export const AdvantageItem = styled.div`
  height: 300px;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: all 0.3s ease;

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
  }
`;