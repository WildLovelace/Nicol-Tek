import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    width: 100%;
    font-family: 'Roboto', sans-serif;
    line-height: 1.6;

    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
  }

   h1, h2, h3, h4, h5, h6 {
    margin: 0 0 1rem 0;
    font-weight: 700;
    line-height: 1.2;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  h2 {
    font-size: 2rem; 
    margin-bottom: 1.25rem;
  }

  h3 {
    font-size: 1.75rem; 
  }

  p {
    margin: 0 0 1.5rem 0;
    font-size: 1.3rem !important;
    line-height: 1.6;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;