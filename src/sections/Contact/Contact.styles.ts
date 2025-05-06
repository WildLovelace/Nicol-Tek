import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  max-width: 1300px;
  margin: 0 auto;
`;

export const ContactInfo = styled.div`
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: ${theme.colors.primary};
  }

  p {
    margin-bottom: 2rem;
    line-height: 1.6;
  }

  .contact-item {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1.5rem;

    svg {
      color: ${theme.colors.accent};
      margin-top: 0.3rem;
    }

    h4 {
      font-size: 1.1rem;
      margin-bottom: 0.3rem;
      color: ${theme.colors.primary};
    }

    p {
      margin: 0;
      color: ${theme.colors.text};
    }
  }
`;

export const ContactForm = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: ${theme.colors.primary};
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  input, textarea {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-family: inherit;
    font-size: 1rem;
    transition: border-color 0.3s ease;

    &:focus {
      outline: none;
      border-color: ${theme.colors.accent};
    }
  }

  textarea {
    resize: vertical;
  }
`;