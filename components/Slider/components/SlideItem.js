import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import LandingSlide from './LandingSlide';
import WorkSlide from './WorkSlide';
import { colors, fonts, easings } from 'utils/variables';
import media from "styled-media-query";
import Video from 'components/Video';

const Wrapper = styled.div`
  top: 0;
  right: 0;
  height: 100%;
  transition: width 0.5s ${easings.easeInOutCustom};
  overflow: hidden;
  opacity: 0;
  width: 0;
  transform: translateX(0);
  pointer-events: none;

  ${props => props.isActive && `
    position: absolute;
    width: 100vw;
    z-index: 3;
    will-change: transform;
    opacity: 1;
    pointer-events: auto;
  `}

  ${props => props.isNext && `
    position: fixed;
    width: ${props.hasMouseLeftNextSlide ? '10vw' : '15vw'};
    z-index: 4;
    will-change: width;
    opacity: 1;
    cursor: pointer;
    pointer-events: auto;

    &:hover {
      width: 15vw;
      transition-duration: 0.5s;
    }
  `}

  ${props => media.lessThan('medium')`
    display: none;
  `}

  background: ${props => props.background};
`
export default ({ isPrevious, isNext, onMouseOut, isActiveSlideHidden, onClickHandler, hasMouseLeftNextSlide, isScrollNSliding, ...props }) => {
  let styles = {};

  if (props.isActive && isScrollNSliding) {
    styles = {
      position: 'fixed'
    }
  }

  if (isPrevious) {
    styles = {
      position: 'absolute',
      width: '100vw',
      zIndex: '1',
      opacity: '1'
    }
  }

  return (
    <Wrapper
      isActive={props.isActive}
      isPrevious={isPrevious}
      isNext={isNext}
      contentColor={props.contentColor}
      background={props.background}
      hasMouseLeftNextSlide={hasMouseLeftNextSlide}
      onMouseOut={onMouseOut}
      isActiveSlideHidden={isActiveSlideHidden}
      onClick={onClickHandler}
      style={styles}
    >
      { props.slug === '' ? <LandingSlide {...props} /> : <WorkSlide {...props} /> }
    </Wrapper>
  )
}