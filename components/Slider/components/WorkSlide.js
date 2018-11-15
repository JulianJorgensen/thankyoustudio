import React from 'react';
import styled from 'styled-components';
import { easings } from 'utils/variables';
import Video from 'components/Video';
import LowerleftContent from './LowerLeftContent';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`

const Image = styled.div`
  position: absolute;
  right: 0;
  width: calc(100vw - 15px);
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(${props => props.image});
  transition: transform 6s ${easings.easeOutShine};
  transition-delay: 0.4s;
  transform: scale(1);

  ${props => props.isActive && `
    transform: scale(1.05);
  `}
`

const StyledVideo = styled(Video)`
  opacity: 0.5;
`

export default ({ title, subtitle, image, vimeoId, isActive, isNext, fontsLoaded, contentColor }) => (
  <Wrapper>
    <LowerleftContent title={title} subtitle={subtitle} isActive={isActive} isNext={isNext} fontsLoaded={fontsLoaded} contentColor={contentColor} />
    <Image isNext={isNext} isActive={isActive} image={image} />
    {vimeoId ? <StyledVideo vimeoId={vimeoId} isActive={isActive} background sliderVideo /> : ''}
  </Wrapper>
)