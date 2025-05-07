import styled from "styled-components";
import { theme } from "../../styles/theme";

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
    height: auto;
    display: flex;

    @media (max-width: ${theme.breakpoints.md}) {
      .img-conteiner {
        display: none !important;
      }
    }

    @media (max-width: ${theme.breakpoints.md}) {
      .map-and-contact {
        flex-direction: column;
      }

      .map iframe {
        width: 350px;
        height: 300px;
      }
    }

    .map-and-contact {
      width: 100%;
      height: 100%;
      display: flex;

      .contacts {
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-right: 10px;

        @media (max-width: ${theme.breakpoints.md}) {
          .contact-item {
            flex-direction: row;
          }

          .contact-item div {
            display: flex;
            flex-direction: row;
            width: 100%;
            justify-content: space-between;
          }

          .contact-item div p {
            transform: translate(10px, -7px);
          }
        }

        .contact-item {
          height: 100%;
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1rem;

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
      img {
        width: 100%;
        height: 85%;
        object-fit: cover;
      }
      .btn-conteiner {
        width: auto;
        display: flex;
        justify-content: space-evenly;
      }
    }
  }
`;
