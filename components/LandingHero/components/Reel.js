import React, { Component } from 'react';
import styled from 'styled-components';
import Vimeo from '@u-wave/react-vimeo';
import ReactPlayer from 'react-player/lib/players/FilePlayer.js';
import { breakpoint, EASINGS, TIMINGS } from 'utils/variables';

const Wrapper = styled.div`
  display: none;
  position: relative;
  width: 100vw;
  height: 56.25vw; /* Given a 16:9 aspect ratio, 9/16*100 = 56.25 */
  min-height: 100vh;
  min-width: 177.77vh; /* Given a 16:9 aspect ratio, 16/9*100 = 177.77 */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${props => props.show && `
    display: block;
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
  render() {
    const { play, onEnded } = this.props;

    return (
      <Wrapper show={play}>
        <StyledReactPlayer
          url='http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'
          onEnded={onEnded}
          playing={play}
          width='100%'
          height='100%'
          controls
        />
      </Wrapper>
    )
  }
}