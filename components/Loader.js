import React from 'react';
import styled, { keyframes } from 'styled-components';

const scale = keyframes`
  from {
    transform: scale(1);
    opacity: 1;
  }

  to {
    transform: scale(0.5);
    opacity: 0.6;
  }
`;

const Wrapper = styled.div`
  border-radius: 100%;
  background-color: black;
  opacity: 0.2;
  width: 50px;
  height: 50px;
  animation: ${scale} 2s linear infinite;
`

export default () => (
  <Wrapper />
);