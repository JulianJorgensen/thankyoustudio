import React from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import { breakpoint, EASINGS, LAYOUT } from 'utils/variables';
import LowerleftContent from './LowerLeftContent';

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
  height: ${LAYOUT.MOBILE.HERO_HEIGHT};
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

  ${breakpoint.up('m')`
    height: 100vh;
  `}
`

const PortfolioNav = styled.div`
  display: none;
  position: absolute;
  z-index: 10;
  bottom: 260px;
  right: 30px;
  color: white;
  min-width: 10vw;

  font-size: 16px;
  line-height: 100%;
  letter-spacing: 3px;
  background-color: black;
  padding: 10px 0 10px 15px;

  ${breakpoint.up('m') `
    display: block;
  `}
`

export default (props) => (
  <Wrapper isActive={props.isActive}>
    <LowerleftContent
      title={props.title}
      teaserText={props.teaserText}
      isActive={props.isActive}
      isNext={props.isNext}
      fontsLoaded={props.fontsLoaded}
      whiteContent={props.whiteContent}
      fadeToBlack={props.fadeToBlack}
      isFirstWorkSlide={props.isFirstWorkSlide}
    />
    {(props.image && props.isDirty) ? <Image {...props} /> : ''}
    {props.video && (props.isDirty || props.isNext) && <SlideVideo {...props} />}
  </Wrapper>
)