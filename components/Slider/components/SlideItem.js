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

  ${props => props.isPrevious && `
    position: absolute;
    width: 100vw;
    z-index: 1;
  `}

  ${props => props.isActive && `
    position: ${props.isScrollNSliding ? 'fixed' : 'absolute'};
    width: 100vw;
    z-index: 3;
    will-change: transform;
    opacity: 1;
    pointer-events: auto;
  `}

  ${props => props.isNext && !props.isScrollNSliding && `
    position: fixed;
    width: 10vw;
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

  ${props => !props.landingSlide && media.lessThan('medium')`
    display: none;
  `}

  background: ${props => props.background};
`



export default (props) => (
  <Link href={`/${props.slug.toLowerCase()}`} as={props.slug ? `/work/${props.slug.toLowerCase()}` : '/'} scroll={false}>
    <Wrapper
      contentColor={props.contentColor}
      isActive={props.isActive}
      isPrevious={props.isPrevious}
      isNext={props.isNext}
      background={props.background}
      landingSlide={props.landingSlide}
      isScrollNSliding={props.isScrollNSliding}
    >
      { props.slug === '' ? <LandingSlide /> : <WorkSlide {...props} /> }
    </Wrapper>
  </Link>
)