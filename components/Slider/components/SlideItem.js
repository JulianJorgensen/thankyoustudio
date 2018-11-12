import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import LandingSlide from './LandingSlide';
import WorkSlide from './WorkSlide';
import { colors, fonts, easings } from 'utils/variables';
import media from "styled-media-query";

const Wrapper = styled.div`
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
      position: 'fixed',
      marginRight: '-15px'
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
      isSliding={props.isSliding}
      contentColor={props.contentColor}
      background={props.background}
      hasMouseLeftNextSlide={hasMouseLeftNextSlide}
      onMouseOut={onMouseOut}
      isActiveSlideHidden={isActiveSlideHidden}
      onClick={onClickHandler}
      className={props.isActive ? 'wrapper is-active' : 'wrapper'}
      style={styles}
    >
      { props.slug === '' ? <LandingSlide {...props} /> : <WorkSlide {...props} /> }
      <style jsx global>{`
        .wrapper {
          top: 0;
          right: 0;
          height: 100%;
          transition: width 0.5s ${easings.easeInOutCustom};
          opacity: 0;
          width: 0;
          transform: translateX(0);
          pointer-events: none;
          overflow: hidden;
        }

        .wrapper.is-active {
          position: absolute;
          width: 100vw;
          z-index: 3;
          will-change: transform;
          opacity: 1;
          pointer-events: auto;     
          // overflow: visible; 
        }
      `}
      </style>
    </Wrapper>
  )
}