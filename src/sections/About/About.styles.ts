import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const AboutContent = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
  font-size: 1.1rem;
  line-height: 1.8;
`;

export const AboutItem = styled.div`
  height: 300px;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }

  h3 {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: ${theme.colors.text};
    font-size: 1rem;
  }
`;