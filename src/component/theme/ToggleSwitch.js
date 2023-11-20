import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import { ThemeContext } from './ThemeContext';

const toggleAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(1);
  }
  75% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(1);
  }
`;

const SwitchContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  margin: 5px;
`;

const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const SwitchSlider = styled.div`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => (theme ? '#2196F3' : '#ccc')};
  transition: 0.4s;
  border-radius: 20px;

  &:before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
    transform: ${({ theme }) => (theme ? 'translateX(20px)' : 'translateX(0)')};
  }
`;

const AnimatedSwitchSlider = styled(SwitchSlider)`
  animation: ${toggleAnimation} 1s infinite;
`;

const ToggleSwitch = ({onClick}) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <SwitchContainer>
      <SwitchInput type="checkbox" onChange={onClick} />
      {theme ? <AnimatedSwitchSlider theme={theme} /> : <SwitchSlider theme={theme} />}
    </SwitchContainer>
  );
};

export default ToggleSwitch;