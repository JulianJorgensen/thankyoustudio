import React, { Component } from 'react';
import styled from 'styled-components';
import { TweenLite } from 'gsap';
import throttle from 'lodash.throttle';
import LandingSlide from './LandingSlide';
import WorkSlide from './WorkSlide';
import { EASINGS, TIMINGS } from 'utils/variables';
import media from 'utils/mediaQueries';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  transition: width ${TIMINGS.SLIDE_ITEM_WRAPPER} ${EASINGS.EASE_IN_OUT_CUSTOM};
  opacity: 0;
  width: 0;
  pointer-events: none;
  overflow: hidden;

  ${props => props.isActive && !props.isCondensed && `
    position: absolute;
    width: 100%;
    z-index: 5;
    opacity: 1;
    pointer-events: auto;
  `}

  ${props => props.isActive && !props.isSliding && `
    overflow: visible;
  `}

  ${props => props.isPrevious && props.isSliding && `
    overflow: visible;
  `}

  ${props => props.isNext && `
    display: none;
    position: fixed;
    width: ${(props.isCondensed || props.isLandingVideoPlaying) ? '0' : props.hasMouseLeftNextSlide ? '10vw' : '15vw'};
    z-index: ${props.isLandingVideoPlaying ? '0' : '6'};
    will-change: width;
    opacity: 1;
    cursor: pointer;
    pointer-events: auto;
    transition-duration: ${props.wasPrevious ? '0s' : TIMINGS.SLIDE_ITEM_WRAPPER};

    &:before {
      content: '';
      position: fixed;
      top: 0;
      right: 0;
      z-index: 100;
      height: 100vh;
      width: 5vw;
    }

    &:hover {
      width: 15vw;
      transition-duration: 0.5s;
    }
  `}

  ${props => props.isNext && media.tablet`
    display: block;
  `}

  background: ${props => props.background ? props.background : ''};
`
export default class SlideItem extends Component {
  constructor(props){
    super(props);

    this.state = {};

    this.slideEl = null;
    this.nextSlideOnScrollAnimation = null;

    this.handleOnScroll = this.handleOnScroll.bind(this);
    this.updateNextSlidePosition = throttle(this.updateNextSlidePosition, 15);
  }

  componentDidMount() {
    this.toggleScrollEventListener();
  }

  componentDidUpdate(prevProps) {
    const { isNext, isActive, isPrevious } = this.props;

    if (!prevProps) return;
    if (prevProps == this.props) return;
    
    // handle scroll animation of next slide
    if (prevProps.isNext && isNext) return;
    if (prevProps.isActive && isActive) return;
    if (prevProps.isPrevious && isPrevious) return;
    this.toggleScrollEventListener();
  }

  toggleScrollEventListener() {
    if (this.props.isNext) {
      document.addEventListener('scroll', this.handleOnScroll);
    } else {
      if (!this.slideEl) return;

      this.nextSlideOnScrollAnimation = TweenLite.to(this.slideEl, 0, {right: 0});
      document.removeEventListener('scroll', this.handleOnScroll);
    }
  }

  handleNextSlideHoverWhenHidden(mouseOver) {
    if (!this.props.isNext) return;

    // Always show next slide when mouse is over to the right
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 500) {
      if (mouseOver) {
        this.nextSlideOnScrollAnimation = TweenLite.to(this.slideEl, 0.5, { right: 0 });
        document.removeEventListener('scroll', this.handleOnScroll);
        return;
      } else {
        this.nextSlideOnScrollAnimation = TweenLite.to(this.slideEl, 0.5, { right: -300 });
        this.toggleScrollEventListener();
        return;
      }
    } else {
      this.nextSlideOnScrollAnimation = TweenLite.to(this.slideEl, 0.5, { right: 0 });
      this.toggleScrollEventListener();
      return;
    }
  }

  handleOnScroll() {
    if (this.props.isSliding) return;

    this.updateNextSlidePosition();
  }

  updateNextSlidePosition() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 1500 || this.props.isScrollNSliding) return;
    if (!this.slideEl) return;
    this.nextSlideOnScrollAnimation = TweenLite.set(this.slideEl, {right: -scrollTop/3});
  }

  render() {
    const { onClickHandler, onCtaClickHandler, ...props } = this.props;

    let styles = {};

    if (props.isActive && props.isScrollNSliding) {
      styles = {
        position: 'fixed'
      }
    }
  
    if (props.isPrevious && !props.isCondensed) {
      styles = {
        position: 'absolute',
        width: '100%',
        zIndex: '1',
        opacity: '1'
      }
    }

    return (
      <Wrapper
        {...props}
        ref={el => this.slideEl = el}
        onClick={onClickHandler}
        className={props.isActive ? 'wrapper is-active' : 'wrapper'}
        style={styles}
        onMouseEnter={() => props.isNext ? this.handleNextSlideHoverWhenHidden(true) : ''}
        onMouseLeave={() => props.isNext ? this.handleNextSlideHoverWhenHidden(false) : ''}
      >
        { props.slug === '' ? <LandingSlide {...props} /> : <WorkSlide {...props} /> }
      </Wrapper>
    )
  }
}