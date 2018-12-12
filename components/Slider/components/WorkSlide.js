import React from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import { EASINGS } from 'utils/variables';
import LowerleftContent from './LowerLeftContent';
import media from 'utils/mediaQueries';

const SlideVideo = dynamic(import('./SlideVideo'));

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Image = styled.div`
  position: absolute;
  right: 0;
  width: 100vw;
  height: 100vw;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(${props => props.src});
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

export default (props) => (
  <Wrapper>
    <LowerleftContent
      title={props.title}
      teaserText={props.teaserText}
      isActive={props.isActive}
      isNext={props.isNext}
      fontsLoaded={props.fontsLoaded}
      whiteContent={props.whiteContent}
      fadeToBlack={props.fadeToBlack}
    />
    {(props.image && props.isDirty) ? <Image {...props} /> : ''}
    {props.video && (props.isDirty || props.isNext) && <SlideVideo {...props} />}
  </Wrapper>
)