import React, { Component } from 'react';
import styled from 'styled-components';
import { TweenLite } from 'gsap';
import throttle from 'lodash.throttle';
import LandingSlide from 'components/LandingHero';
import WorkSlide from './WorkSlide';
import { breakpoint, LAYOUT, EASINGS, TIMINGS } from 'utils/variables';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: ${LAYOUT.MOBILE.HERO_HEIGHT};
  min-height: 500px;
  transition: width ${TIMINGS.SLIDE_ITEM_WRAPPER} ${EASINGS.EASE_IN_OUT_CUSTOM};
  opacity: 0;
  width: 0;
  pointer-events: none;
  overflow: hidden;

  ${breakpoint.m `
    height: ${LAYOUT.HERO_HEIGHT};
  `}

  ${props => props.isActive && `
    position: absolute;
    width: 100%;
    z-index: 5;
    opacity: 1;
    // pointer-events: auto;
  `}

  ${props => props.isActive && !props.isSliding && `
    overflow: visible;
  `}

  ${props => props.isActive && props.isSliding && `
    position: fixed;
  `}

  ${props => props.isNext && `
    position: fixed;
    width: 0;
    z-index: 6;
    will-change: width;
    opacity: 1;
    cursor: pointer;
    pointer-events: auto;
    transition-duration: 0.5s;

    &:before {
      display: ${props.reel.isPlaying ? 'none' : 'block'};
      content: '';
      position: fixed;
      top: 0;
      right: 0;
      z-index: 100;
      height: 100vh;
      width: 3vw;
    }

    &:hover {
      width: 15vw;
      transition-duration: 0.5s;

      &:before {
        pointer-events: none;
      }
    }
  `}

  ${props => props.isNext && breakpoint.m`
    width: ${props.showNextSlide && !props.reel.isPlaying ? props.hasMouseLeftNextSlide ? '10vw' : '15vw' : '0'};
  `}

  ${props => props.isNext && props.isSliding && `
    pointer-events: none;
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
    this.preloadPoster = this.preloadPoster.bind(this);
  }

  componentDidMount() {
    this.toggleScrollEventListener();

    this.setIsDirty();
  }

  componentDidUpdate(prevProps) {
    const { isNext, isActive, isPrevious, preloadPoster } = this.props;

    if (preloadPoster && !this.state.preloadedPoster) {
      this.preloadPoster();
    }

    if (!prevProps) return;
    if (prevProps == this.props) return;

    // handle scroll animation of next slide
    if (prevProps.isNext && isNext) return;
    if (prevProps.isActive && isActive) return;
    if (prevProps.isPrevious && isPrevious) return;
    this.toggleScrollEventListener();
    this.setIsDirty();
  }

  preloadPoster() {
    this.setState({
        preloadedPoster: true
    }, () => {
      const { isMobile, slideItemData } = this.props;
      console.log('preloading image', slideItemData.poster);
      let img = new Image();
      img.src = isMobile ? slideItemData.mobile.poster : slideItemData.poster;
    });
  }

  setIsDirty() {
    if (!this.props.isActive) return;

    this.setState({
      isDirty: true
    });
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
    const { onClickHandler, onCtaClickHandler, slideItemData, ...props } = this.props;

    let styles = {};

    if (props.isActive && props.isScrollNSliding) {
      styles = {
        position: 'fixed'
      }
    }
  
    if (props.isPrevious) {
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
        {...slideItemData}
        ref={el => this.slideEl = el}
        onClick={onClickHandler}
        className={props.isActive ? 'wrapper is-active' : 'wrapper'}
        style={styles}
        onMouseEnter={() => props.isNext ? this.handleNextSlideHoverWhenHidden(true) : ''}
        onMouseLeave={() => props.isNext ? this.handleNextSlideHoverWhenHidden(false) : ''}
      >
        { slideItemData.slug === '' ? <LandingSlide isActive={props.isActive} /> : <WorkSlide isDirty={this.state.isDirty} {...slideItemData} {...props} /> }
      </Wrapper>
    )
  }
}