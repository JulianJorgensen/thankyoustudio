import React, { Component } from 'react';
import Vimeo from '@u-wave/react-vimeo';
import Observer from 'react-intersection-observer';
import styled from 'styled-components';

const Wrapper = styled.div`
`

const Video = styled(Vimeo)`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-bottom: 56.25%;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

export default class VimeoVideo extends Component {
  constructor() {
    super();
    this.state = {
      pauseVideo: true
    };

    this.handleOnVisibilityChange = this.handleOnVisibilityChange.bind(this);
    this.handleOnPlay = this.handleOnPlay.bind(this);
    this.handleOnPause = this.handleOnPause.bind(this);
  }

  handleOnVisibilityChange(inView) {    
    const { hasBeenInView, playing } = this.state;

    if (inView && !hasBeenInView) {
      this.setState({
        hasBeenInView: true
      });
    }

    if (!inView && playing) {
      this.setState({
        pauseVideo: true
      });
    }
  }

  handleOnPlay() {
    this.setState({
      playing: true,
      pauseVideo: false
    });
  }
  
  handleOnPause() {
    this.setState({
      playing: false,
      pauseVideo: true
    });
  }

  render() {
    const { vimeoId, className, paused, ...props } = this.props;
    const { pauseVideo } = this.state;

    return (
      <Wrapper className={className}>
        <Observer {...props} tag="div" onChange={this.handleOnVisibilityChange}>
          <Video
            video={vimeoId}
            paused={pauseVideo}
            onPlay={this.handleOnPlay}
            onPause={this.handleOnPause}
            {...props}
          />
        </Observer>
      </Wrapper>
    )
  }
}
