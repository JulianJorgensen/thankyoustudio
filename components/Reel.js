import React, { Component } from 'react';
import styled from 'styled-components';
import Vimeo from '@u-wave/react-vimeo';

import { breakpoint, EASINGS, TIMINGS } from 'utils/variables';

const Wrapper = styled.div`
  display: none;

  ${props => props.show && `
    display: block;
  `}
`

const StyledVimeo = styled(Vimeo)`
  iframe {
    width: 100vw;
    height: 56.25vw; /* Given a 16:9 aspect ratio, 9/16*100 = 56.25 */
    min-height: 100vh;
    min-width: 177.77vh; /* Given a 16:9 aspect ratio, 16/9*100 = 177.77 */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

export default class Reel extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loadPlayer: true });
    }, 2000);
  }

  render() {
    const { play } = this.props;

    return (
      <Wrapper show={play}>
        {this.state.loadPlayer && <StyledVimeo
          video="233816544"
          paused={!play}
        />}
      </Wrapper>
    )
  }
}