import React from 'react';
import styled from 'styled-components';
import { easings } from 'utils/variables';
import Video from 'components/Video';
import LowerleftContent from 'components/Slider/components/LowerLeftContent';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`

const Image = styled.div`
  position: absolute;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(${props => props.image});
  transition: transform 6s ${easings.easeOutShine};
  transform: scale(1);

  ${props => props.isActive && `
    transform: scale(1.05);
  `}
`

const StyledVideo = styled(Video)`
  opacity: 0.5;
`

export default (props) => (
  <Wrapper>
    <LowerleftContent {...props} />
    <Image isActive={props.isActive} image={props.image} />
    {props.vimeoId ? <StyledVideo vimeoId={props.vimeoId} isActive={props.isActive} background sliderVideo /> : ''}
  </Wrapper>
);