import React, { Component } from 'react';
import styled from 'styled-components';
import { breakpoint, EASINGS, TIMINGS } from 'utils/variables';

const FullReelWrapper = styled.div`
  display: none;

  ${props => props.show && `
    display: block;
  `}
`

const FullReel = styled.video`
  position: absolute;
  min-height: 100%;
  min-width: 100vw;
`

export default class Reel extends Component {
  constructor() {
    super();

    this.reelEl = null;
    this.playVideo = this.playVideo.bind(this);
  }

  componentWillUpdate(newProps) {
    console.log('try to play reel', newProps)
    if (newProps.play) {
      this.reelEl.play();
    }
  }

  playVideo() {
    this.reelEl.play();
  }

  render() {
    const { play } = this.props;

    return (
      <FullReelWrapper show={play}>
        <FullReel
          ref={el => this.reelEl = el}
          onCanPlay={this.playVideo}
          playsInline
        >
          <source src="http://cdn.thankyoustudio.com.s3.amazonaws.com/videos/reel18.mp4" type="video/mp4" />
        </FullReel>
      </FullReelWrapper>
    )
  }
}