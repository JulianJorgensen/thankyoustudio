import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import * as actions from 'store/actions';
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
  width: 100vw;
  height: 56.25vw; /* Given a 16:9 aspect ratio, 9/16*100 = 56.25 */
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
  }

  componentDidMount() {
    console.log('reel mounted')
  }

  handleOnPlayClick() {
    console.log('handleOnPlayClick');
    this.handleLoadPlayer();

    if (this.state.playReel) return;

    this.checkPlayerRef = setInterval(() => {
      // play the reel once the player is ready
      if (this.player) {
        this.playReel();
        clearInterval(this.checkPlayerRef);
      }
    }, 30);
  }

  handleOnVisibilityChange(inView) {
    if (inView) return;

    this.handlePause();
  }

  handlePause() {
    const { dispatch } = this.props;
    dispatch(actions.landingVideoPlaying(false));
  }

  handleLoadPlayer() {
    this.setState({
      loadPlayer: true
    });
  }

  handleOnReady() {
    this.setState({
      playerReady: true
    });
  }

  render() {
    const { store } = this.props;

    return (
      <Observer onChange={this.handleOnVisibilityChange}>
        <Wrapper show={store.isLandingVideoPlaying}>
          <Inner>
            {store.isLandingVideoPlaying &&
              <ReactPlayer
                // ref={ref}
                url='http://cdn.thankyoustudio.com.s3.amazonaws.com/videos/reel_dec20.mp4'
                // onEnded={onEnded}
                onPause={this.handlePause}
                // onStart={onStart}
                // onReady={onReady}
                playing={store.isLandingVideoPlaying}
                width='100%'
                height='100%'
                controls
              />
            }
          </Inner>
        </Wrapper>
      </Observer>
    )
  }
}