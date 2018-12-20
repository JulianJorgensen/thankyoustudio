import React, { Component } from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import ReactPlayer from 'react-player/lib/players/Vimeo.js';
import { breakpoint, EASINGS, TIMINGS } from 'utils/variables';

const Observer = dynamic(import('react-intersection-observer'), {
  ssr: false
});

const Wrapper = styled.div`
  opacity: 0;
  position: absolute;
  transition: all 0.2s ease;
  background-color: black;

  ${breakpoint.m`
    width: 100vw;
    height: 56.25vw; /* Given a 16:9 aspect ratio, 9/16*100 = 56.25 */
    min-height: 100vh;
    min-width: 177.77vh; /* Given a 16:9 aspect ratio, 16/9*100 = 177.77 */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
  `}

  ${props => props.show && `
    opacity: 1;
  `}

  ${props => props.fixedMode && `
    position: fixed;
    transform: none;
    min-height: auto;
    min-width: auto;
    width: 20vw;
    height: 0;
    padding-bottom: 56.25%;
    top: auto;
    left: auto;
    right: 0;
    bottom: 0;
  `}
`

const StyledReactPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export default class Reel extends Component {
  constructor() {
    super();
    this.state = {};

    this.handleOnVisibilityChange = this.handleOnVisibilityChange.bind(this);
  }

  handleOnVisibilityChange(inView) {
    // this.setState({
    //   fixedMode: !inView
    // });
  }

  render() {
    const { ref, play, onEnded, onPause, onStart, onReady } = this.props;

    return (
      <Observer onChange={this.handleOnVisibilityChange}>
        <Wrapper show={play}>
          <StyledReactPlayer
            ref={ref}
            url='https://vimeo.com/307493850'
            onEnded={onEnded}
            onPause={onPause}
            onStart={onStart}
            onReady={onReady}
            playing={play}
            width='100%'
            height='100%'
            controls
            // fixedMode={this.state.fixedMode}
          />
        </Wrapper>
      </Observer>
    )
  }
}