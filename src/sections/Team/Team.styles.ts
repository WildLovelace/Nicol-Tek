// import styled from 'styled-components';
// import { theme } from '../../styles/theme';

// export const TeamGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//   gap: 2rem;
//   max-width: 1300px;
//   margin: 0 auto;
// `;

// export const TeamMember = styled.div`
//   text-align: center;
//   background: white;
//   border-radius: 8px;
//   overflow: hidden;
//   box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
//   transition: all 0.3s ease;

//   &:hover {
//     transform: translateY(-10px);
//     box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);

//     img {
//       transform: scale(1.05);
//     }
//   }

//   .photo-container {
//     width: 100%;
//     height: 250px;
//     overflow: hidden;
//   }

//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     transition: transform 0.5s ease;
//   }

//   h3 {
//     margin: 1.5rem 0 0.5rem;
//     color: ${theme.colors.primary};
//     font-size: 1.2rem;
//   }

//   p {
//     color: ${theme.colors.text};
//     padding: 0 1rem 1.5rem;
//     font-size: 0.9rem;
//   }
// `;


import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const TeamContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
`;

export const TeamSlider = styled.div`
  display: flex;
  width: 100%;
`;

export const TeamSlide = styled.div`
  min-width: 100%;
  padding: 0 2rem;
  box-sizing: border-box;
`;

export const TeamMember = styled.div`
  text-align: center;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  padding-bottom: 2rem;

  .photo-container {
    width: 100%;
    height: 400px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
  }

  h3 {
    margin: 1.5rem 0 0.5rem;
    color: ${theme.colors.primary};
    font-size: 1.5rem;
  }

  p {
    color: ${theme.colors.text};
    padding: 0 1rem;
    font-size: 1rem;
  }
`;

export const SliderControls = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  box-sizing: border-box;
  transform: translateY(-50%);
`;

export const SliderButton = styled.button`
  background: ${theme.colors.primary};
  color: white;
  border: none;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 2rem;

  &:hover {
    background: ${theme.colors.accent};
    transform: scale(1.1);
  }
`;

export const SliderDots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  gap: 0.5rem;
  height: 15px;

  button {
    width: 12px;
    height: 12px;
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
`;