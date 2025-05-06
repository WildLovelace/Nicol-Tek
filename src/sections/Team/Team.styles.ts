import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const TeamContainer = styled.div`
  position: relative;
  width: 100%;
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .slide-group {
   display: flex;
   flex-direction: row;
   justify-content: space-between;
  }
`;

export const TeamMember = styled.div`
  text-align: center;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  margin-right: 5px;

  .photo-container {
    width: 100%;
    height: 500px;
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
  width: 100px;
  height: 100px;
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

  .arrow-2-left, .arrow-2-right {
    cursor: pointer;
    height: 125px;
    width: 80px;
    position: relative;
    margin: 20px;
}
.arrow-2-left{
  transform: scale(-1, 1);
}

.arrow-2-top, 
.arrow-2-bottom {
    background: white;
    height: 10px;
    left: 0;
    position: absolute;
    top: 60px;
    width: 50px;
}

.arrow-2-top {
    top: 64px;
}

.arrow-2-top {
    transform: rotate(45deg);
    transform-origin: bottom right;
}

.arrow-2-bottom {
    transform: rotate(-45deg);
    transform-origin: top right;
}

.arrow-2-top::after, 
.arrow-2-bottom::after {
    background: ${theme.colors.primary};
    content: '';
    height: 100%;
    position: absolute;
    top: 0;
    transition: all 0.15s;
}

.arrow-2-top::after {
    left: 100%;
    right: 0;
    transition-delay: 0s;
}

.arrow-2-bottom::after {
    left: 0;
    right: 100%;
    transition-delay: 0.15s;
}

.arrow-2:hover .arrow-2-top::after {
    left: 0;
    transition-delay: 0.15s;
}

.arrow-2:hover .arrow-2-bottom::after {
    right: 0;
    transition-delay: 0s;
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