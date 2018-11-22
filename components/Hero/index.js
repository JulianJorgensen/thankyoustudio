import React from 'react';
import styled from 'styled-components';
import { EASINGS } from 'utils/variables';
import LowerleftContent from './components/LowerLeftContent';
import media from 'utils/mediaQueries';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`

const Image = styled.div`
  position: absolute;
  right: 0;
  width: calc(100vw - 15px);
  height: 100vw;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(${props => props.image});
  transition: transform 6s ${EASINGS.EASE_OUT_SHINE};
  transition-delay: 0.4s;
  transform: scale(1);

  ${props => props.isActive && `
    transform: scale(1.05);
  `}

  ${media.tablet`
    height: 100vh;
  `}
`

export default ({ title, subtitle, image, isActive, isNext, fontsLoaded, contentColor }) => (
  <Wrapper>
    <LowerleftContent title={title} subtitle={subtitle} isActive={isActive} isNext={isNext} fontsLoaded={fontsLoaded} contentColor={contentColor} />
    <Image isNext={isNext} isActive={isActive} image={image} />
  </Wrapper>
)