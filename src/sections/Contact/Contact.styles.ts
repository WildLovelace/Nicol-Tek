import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const ContactContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
`;

export const ContactInfo = styled.div`
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: ${theme.colors.primary};
    text-align: center;
  }

  p {
    text-align: center;
    margin-bottom: 2rem;
  }

  .conteiner {
    display: flex;
    
    .map-and-contact{
    width: 100%;
    height: 100%;
    display: flex;
    
  .contacts{
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-right: 10px;

    .contact-item {
    height:100%;
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1.5rem;

    a {
      font-size: 1.3rem;
    }

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
      text-align: left;
      margin: 0;
      color: ${theme.colors.text};
    }
  }
  }
  }
  .img-conteiner {
    img{
    width: 100%;
    height: 85%;
    object-fit: cover;
  }
  .btn-conteiner{
    width: auto;
    display: flex;
    justify-content: space-evenly;
  }
  }
  }
`;

export const ContactForm = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content:space-around ;

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