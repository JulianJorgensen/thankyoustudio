import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import * as actions from 'store/actions';
import CloseIcon from 'assets/icons/FontAwesome/regular/times.svg';
import { breakpoint, EASINGS, TIMINGS } from 'utils/variables';

const ReactPlayer = dynamic(import('react-player/lib/players/FilePlayer.js'));
const Observer = dynamic(import('react-intersection-observer'), {
  ssr: false
});

const Wrapper = styled.div`
  opacity: 0;
  position: fixed;
  top: 0;
  left: 0;
  transition: all 0.2s ease;
  background-color: black;
  z-index: 99;
  width: 100vw;
  height: 100vh;
  pointer-events: none;

  ${props => props.show && `
    opacity: 1;
    pointer-events: auto;
  `}
`

const Inner = styled.div`
  ${breakpoint.m `
    min-width: 100vw;
    min-height: 100vh;

    * {
      min-height: inherit;
      min-width: inherit;
    }

    video {
      object-fit: cover;
    }
  `}
`

const CloseReel = styled.div`
  position: absolute;
  right: 40px;
  top: 40px;
  z-index: 200;
  cursor: pointer;
  svg {
    width: 60px;
    height: 60px;

    path {
      fill: white;
    }
  }
`

@connect((store) => ({
  store,
}))
export default class Reel extends Component {
  constructor() {
    super();
    this.state = {};

    this.handleOnVisibilityChange = this.handleOnVisibilityChange.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleOnReady = this.handleOnReady.bind(this);
  }

  handleOnVisibilityChange(inView) {
    if (inView) return;

    this.handlePause();
  }

  handlePause() {
    this.handleClose();
  }

  handleClose() {
    const { dispatch } = this.props;
    dispatch(actions.landingVideoPlaying(false));
  }

  handleOnReady() {
    const { dispatch } = this.props;
    alert('player is ready');
    dispatch(actions.landingVideoReady(true));
  }

  render() {
    const { store } = this.props;

    return (
      <Observer onChange={this.handleOnVisibilityChange}>
        <Wrapper show={store.reel.isPlaying}>
          <Inner>
            {store.reel.isLoading && alert('loading') && 
              <ReactPlayer
                // ref={ref}
                url='http://cdn.thankyoustudio.com.s3.amazonaws.com/videos/reel_dec20.mp4'
                onPause={this.handlePause}
                onEnded={this.handleClose}
                // onStart={onStart}
                onReady={this.handleOnReady}
                playing={store.reel.isPlaying}
              />
            }
          </Inner>
          <CloseReel onClick={this.handleClose}><CloseIcon /></CloseReel>
        </Wrapper>
      </Observer>
    )
  }
}