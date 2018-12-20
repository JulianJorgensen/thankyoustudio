import React, { Component } from 'react';
import styled from 'styled-components';
import throttle from 'lodash.throttle';
import { EASINGS, TIMINGS, LAYOUT } from 'utils/variables';
import { breakpoint } from 'utils/variables';

const Wrapper = styled.div`
  position: absolute;
  overflow: hidden;
  right: 0;
  height: 100%;
`

const VideoWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: ${LAYOUT.MOBILE.HERO_HEIGHT};

  ${breakpoint.up('m')`
    height: ${LAYOUT.HERO_HEIGHT};
  `}
`

const Video = styled.video`
  min-height: ${LAYOUT.MOBILE.HERO_HEIGHT};
  min-width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${breakpoint.up('m')`
    min-width: 100vw;
    min-height: ${LAYOUT.HERO_HEIGHT};
  `}
`

export default class SlideVideo extends Component {
  constructor(props){
    super(props);
    this.state = {};

    this.videoEl = null;
    this.videoWrapperEl = null;
    this.videoWrapperAnimation = null;

    this.handleOnScroll = this.handleOnScroll.bind(this);
    this.updateStyles = throttle(this.updateStyles, 20);
    this.removeScrollEventListener = this.removeScrollEventListener.bind(this);
  }

  componentDidMount() {
    if (!this.videoEl) return;
    if (this.props.isActive) {
      document.addEventListener('scroll', this.handleOnScroll);
      this.videoEl.play();
    }
  }

  componentDidUpdate() {
    if (!this.videoEl) return;
    if (this.props.isActive) {
      document.addEventListener('scroll', this.handleOnScroll);
      this.videoEl.play();
    } else {
      this.videoEl.pause();
      this.removeScrollEventListener();
    }
  }

  handleOnScroll() {
    if (this.props.isSliding) return;
    if (!this.videoEl) return;
    this.updateStyles();
  }

  updateStyles() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 1000) return;

    this.videoWrapperAnimation = TweenLite.set(this.videoWrapperEl, {
      top: scrollTop/3.5
    });
  }

  removeScrollEventListener() {
    document.removeEventListener('scroll', this.handleOnScroll);
    setTimeout(() => {
      this.videoWrapperAnimation = TweenLite.set(this.videoWrapperEl, {
        top: 0
      });  
    }, TIMINGS.SET_IS_SLIDING_FALSE);
  }

  render() {
    const { ...props } = this.props;

    return (
      <Wrapper>
        <VideoWrapper ref={el => this.videoWrapperEl = el}>
          <Video ref={el => this.videoEl = el} poster={props.isMobile ? props.mobile.poster : props.poster} playsInline muted loop>
          {props.isDirty && <source src={props.isMobile ? props.mobile.video : props.video} type="video/mp4" />}
          </Video>
        </VideoWrapper>
      </Wrapper>
    )
  }
}