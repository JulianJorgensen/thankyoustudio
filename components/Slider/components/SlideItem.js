import React, { Component } from 'react';
import styled from 'styled-components';
import { TweenLite } from 'gsap';
import throttle from 'lodash.throttle';
import LandingSlide from './LandingSlide';
import WorkSlide from './WorkSlide';
import { easings, timings } from 'utils/variables';
import media from "styled-media-query";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  transition: width ${timings.slideItemWrapper} ${easings.easeInOutCustom};
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
    position: fixed;
    width: ${(props.isCondensed || props.isLandingVideoPlaying) ? '0' : props.hasMouseLeftNextSlide ? '10vw' : '15vw'};
    z-index: 6;
    will-change: width;
    opacity: 1;
    cursor: pointer;
    pointer-events: auto;

    ${props.wasPrevious && `
      transition-duration: 0s;
    `}

    &:hover {
      width: 15vw;
      transition-duration: 0.5s;
    }
  `}

  ${props => props.isNext && media.lessThan('medium')`
    display: none;
  `}

  background: ${props => props.background};
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
    if (!prevProps) return;
    if (prevProps == this.props) return;
    if (prevProps.isNext && this.props.isNext) return;
    if (prevProps.isActive && this.props.isActive) return;
    if (prevProps.isPrevious && this.props.isPrevious) return;
    this.toggleScrollEventListener(prevProps);
  }

  toggleScrollEventListener() {
    if (this.props.isNext) {
      document.addEventListener('scroll', this.handleOnScroll);
    } else {
      console.log('this.slideEl', this.slideEl);
      if (!this.slideEl) return;

      this.nextSlideOnScrollAnimation = TweenLite.to(this.slideEl, 0, {right: 0});
      document.removeEventListener('scroll', this.handleOnScroll);
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
      >
        { props.slug === '' ? <LandingSlide {...props} /> : <WorkSlide {...props} /> }
      </Wrapper>
    )
  }
}