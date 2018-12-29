import React, { Component } from 'react';
import { connect } from 'react-redux';
import dynamic from 'next/dynamic';
import VimeoPlayer from 'react-player/lib/players/Vimeo.js';
import styled from 'styled-components';
import Loader from 'components/Loader';

const Observer = dynamic(import('react-intersection-observer'), {
  ssr: false,
  loading: () => <Loader />
});

const Wrapper = styled.div`
`

const Video = styled(VimeoPlayer)`
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

@connect((store) => ({
  store,
}))
export default class Vimeo extends Component {
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
    const { hasBeenInView, playing } = this.state;

    if (inView && !hasBeenInView) {
      this.setState({
        hasBeenInView: true
      });
    }

    if (inView && !playing && !this.props.store.isMobile) {
      this.setState({
        pauseVideo: false
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
    const { pauseVideo } = this.state;

    return (
      <Wrapper className={className}>
        <Observer {...props} onChange={this.handleOnVisibilityChange} threshold={0.5}>
          <Video
            url={`https://vimeo.com/${vimeoId}`}
            playing={!pauseVideo}
            onPlay={this.handleOnPlay}
            onPause={this.handleOnPause}
            width='100%'
            height='100%'
            {...props}
          />
        </Observer>
      </Wrapper>
    )
  }
}