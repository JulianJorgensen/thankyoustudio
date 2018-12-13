import React, { Component } from 'react';
import styled from 'styled-components';
import throttle from 'lodash.throttle';
import { EASINGS, TIMINGS } from 'utils/variables';
import { breakpoint } from 'utils/variables';

const Wrapper = styled.div`
  position: absolute;
  overflow: hidden;
  right: 0;
`

const VideoWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`

const Video = styled.video`
  min-height: 100vh;
  min-width: 100vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
          <Video ref={el => this.videoEl = el} poster={props.poster} muted loop>
          {props.isDirty && <source src={props.video} type="video/mp4" />}
          </Video>
        </VideoWrapper>
      </Wrapper>
    )
  }
}